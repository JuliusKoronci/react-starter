import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions/tasks.action';
import * as generalActions from '../../../redux/actions/general.action';
import configResolver from '../../../../config/configResolver';
import {convertDateToApiString} from '../../../services/general';

import View from '../../../views/templates/main/filter/filter.jsx';


class Filter extends Component {

    constructor(props, context) {
        super(props, context);

        this.filterConfig = configResolver.filterConfig(props.params.filterId);
        this.filterOptionsConfig = configResolver.loadFilterOptionList();
        this.filterTasksConfig = configResolver.loadFilterTasks();

        this.state = {
            filterFormVisible: true,
            sentValues: [],

            columns: [
                {title: true},
                {status: false},
                {project: false},
                {creator: false},
                {requester: false},
                {company: false},
                {assigned: false},
                {tag: false},
                // {owner: false},
                {created: false},
                {started: false},
                {deadline: false},
                {closed: false},
            ]

        }
    }


    loadTasksFunction = (url, e) => {
        this.props.actions.requestTasksFromUrl(url);
    };


    deleteHandler = (id) => {
        alert('delete handler');
    };

    componentWillMount() {
        if (this.props.params.filterId && !this.props.filter) {
            // alert('loading');
            this.props.actions.loadEntityById(this.props.params.filterId, this.filterConfig);
        }

        this.props.actions.loadEntityList(this.filterOptionsConfig);
        this.props.actions.loadEntityList(this.filterTasksConfig);


        //else{alert('not loading')}
    }


    getFilterTasks = () => {
        this.setState({saveFilter: false});
    };
    saveFilter = () => {
        this.setState({saveFilter: true});
    };


    onSubmit = (oldValues, e) => {

        let values = Object.assign({}, oldValues);

        // console.log('save?',this.state.saveFilter);
        // console.log('values:', values);


        ['closedTime', 'startedTime', 'deadlineTime', 'createdTime'].map((field) => {

            // console.log(field,values[field+'Radio'],values[field]);

            if (values[field + 'Radio'] && values[field + 'Radio'] === 'now') {
                values[field] = this.state.saveFilter ? 'TO=NOW' : 'TO%3DNOW';

                // console.log('now',[field]);

            } else {
                //if (values[field]['radio'] === 'timeRange') {
                // values[field]='';

                let from = values[field] ? values[field]['from'] : '';
                let to = values[field] ? values[field]['to'] : '';

                from = convertDateToApiString(from);
                to = convertDateToApiString(to);

                if ((typeof from !== 'undefined' && from !== '') || (typeof to !== 'undefined' && to !== '')) {
                    values[field] = this.state.saveFilter ? 'FROM=' + from + ',TO=' + to : 'FROM%3D' + from + ',TO&%3D' + to;
                } else {
                    values[field] = '';
                }
            }

            // this.setState({sentValues:})

            // values[field+'Radio']='TO=NOW'

        });
        // values={};

        // console.log(values);

        let columns = this.state.columns.map((column) => {
            let key = Object.keys(column)[0];
            if (values.columns && values.columns.hasOwnProperty(key) && typeof column[key] !== 'undefined' && (!!values.columns[key])) {
                return {[key]: true};
            } else {
                return {[key]: false};
            }
        });
        this.setState({columns: columns ? columns : []});


        let newFilterValues = {};
        if (values.filter) {
            Object.keys(values.filter).map((key) => {
                //console.log(values.filter[key]);
                if ((values.filter.hasOwnProperty(key) && typeof values.filter[key] !== 'undefined' && values.filter[key] !== '' && values.filter[key])) {
                    newFilterValues[key] = values.filter[key];
                }
            });
        }

        // console.log(newFilterValues)
        // console.log(values)
        values.filter = newFilterValues;

        let filterValues = Object.assign({}, values);
        let filterSaveValues = Object.assign({}, values);


        if (this.state.saveFilter) {
            let columnsToSend = [];
            this.state.columns.map((column) => {
                let key = Object.keys(column)[0];
                if (values.columns && values.columns.hasOwnProperty(key) && typeof column[key] !== 'undefined' && (!!values.columns[key])) {
                    columnsToSend.push(key);
                }
            });
            filterSaveValues.columns = columnsToSend.join();

            let config = configResolver.saveFilter(filterSaveValues, this.props.params.filterId);
            this.props.actions.generalRequest(config.data, config);
        }


        this.props.actions.requestTasks(configResolver.loadFilterTasks(filterValues));

    };


    componentDidMount() {
        // TODO
        // this.config = configResolver.tasksConfig('project', 141);

        let config = this.props.params.filterId ? configResolver.tasksConfig('filter', this.props.params.filterId) : configResolver.tasksConfig();
        this.props.actions.requestTasks(config);
    }


    toggleFilter = (e) => {
        this.setState({filterFormVisible: !this.state.filterFormVisible})
    };


    changeRowVisibility = (value, e) => {
        alert('change row visibility');
    }


    toggleRowVisibility = (value, e) => {

        let name = value;
        let checked = !!e.target.checked;

        if (this.state.columns[name]) {
            console.log('exists')
            this.setState({
                // visibleFields: Object.assign({},this.state.visibleFields, {[name]:checked })
                columns: Object.assign({}, this.state.columns, this.state.columns[name]['visible'] = checked)
            });
        } else {
            console.log('doesnt exist')
        }

        console.log('columns', this.state.columns);

    };


    render() {
        return (
            <View {...this.props} toggleFilter={this.toggleFilter} filterFormVisible={this.state.filterFormVisible}
                  toggleRowVisibility={this.toggleRowVisibility}
                  visibleFields={this.state.visibleFields} columns={this.state.columns} onSubmit={this.onSubmit}
                  loadTasksFunction={this.loadTasksFunction} getFilterTasks={this.getFilterTasks}
                  saveFilter={this.saveFilter}/>
        );
    }
}


function mapStateToProps(state, ownProps) {
    const filterId = ownProps.params.filterId;


    const filter = state.filter.filter((filter) => parseInt(filter.id, 10) === parseInt(filterId, 10));
    const filterOptions = state.filters.options || [];

    return {
        filterFormVisible: state.filterFormVisible,
        filter: filter.length > 0 ? filter[0] : false,
        filterOptions: filterOptions,
        tasks: state.tasks
    };
}
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({...actions, ...generalActions}, dispatch)};

}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
