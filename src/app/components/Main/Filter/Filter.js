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

        // console.log(props.userAcl)
        // share_filters

        this.filterConfig = configResolver.filterConfig(props.params.filterId);
        this.filterOptionsConfig = configResolver.loadFilterOptionList();
        this.filterTasksConfig = configResolver.loadFilterTasks();
        this.canModifyPublicFilters=props.userAcl.indexOf('share_filters')!==-1;
        // console.log('can modify',props.userAcl.indexOf('share_filters'));

        this.state = {

            creatingFilter:!props.params.filterId,
            filterFormVisible: props.formVisible || true,
            sentValues: {},

            getColumnsFromState:false,
            columns: [
                {title: true},
                {requester: true},
                {project: true},
                {assigned: true},
                {status: true},

                {creator: false},
                {company: false},
                {tag: false},
                // {owner: false},
                {createdTime: false},
                {startedTime: false},
                {deadlineTime: false},
                {closedTime: false},
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

        //ak je vybraty konkretny filter a neni v reduxe, tak sa natiahne
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
        this.setState({submitType: 'save'});
    };
    createFilterHandler = () => {
        this.setState({saveFilter: true});
        this.setState({submitType: 'create'});
    };

    deleteFilterHandler = () => {
        this.setState({submitType: 'delete'});
        // this.setState({saveFilter: true});
        // alert('deleting filter')
    };



    deleteFilter = () => {
        let config = configResolver.deleteFilter(this.props.params.filterId);
        this.props.actions.generalRequest(config.data, config);
    };

    createFilter = () => {
        alert('created');
    };







// tu sa bud uklada filter, alebo len requestnu tasky, podla toho, na aky button sa kliklo (kvoli redux formu)
    onSubmit = (oldValues, e) => {



        if(this.state.submitType && this.state.submitType === 'delete'){
            return this.deleteFilter();
        }





        this.setState({getColumnsFromState:true});

        let values = Object.assign({}, oldValues);

        // console.log('save?',this.state.saveFilter);
        // console.log('values:', values);



        // MAP DATES
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




            let columns = this.state.columns.map((column) => {
                let key = Object.keys(column)[0];
                if (values.columns && values.columns.hasOwnProperty(key) && typeof column[key] !== 'undefined' && (!!values.columns[key])) {
                    return {[key]: true};
                } else {
                    return {[key]: false};
                }
            });
            this.setState({columns: (columns ? columns : [])});





        //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        let newFilterValues = {};

        // console.log('values filter',values.filter)
        // if (values.filter) {
        //     console.log('iterating values')
        //     Object.keys(values.filter).map((key) => {
        //         console.log('iteration',values.filter[key]);
        //         if ((values.filter.hasOwnProperty(key) && typeof values.filter[key] !== 'undefined' && values.filter[key] !== '' && values.filter[key])) {
        //             newFilterValues[key] = values.filter[key];
        //         }
        //     });
        // }

        // console.log(newFilterValues)
        // console.log('values',values)

        values.filter = newFilterValues;

        // console.log('values',values);


        let filterValues = Object.assign({}, values);
        let filterSaveValues = Object.assign({}, values);





        //pre create a save filter - columns to show sa daju do send values
        let columnsToSend = [];
        this.state.columns.map((column) => {
            let key = Object.keys(column)[0];
            if (values.columns && values.columns.hasOwnProperty(key) && typeof column[key] !== 'undefined' && (!!values.columns[key])) {
                columnsToSend.push(key);
            }
        });
        filterSaveValues.columns = columnsToSend.join();




        //vytvorenie filtra
        if(this.state.submitType && this.state.submitType === 'create'){
            // return this.createFilter(oldValues,e);
            filterSaveValues.title='new filter';
            filterSaveValues.public=true;
            filterSaveValues.order=0;
            filterSaveValues.icon_class='&#xE7EF;';
            let config = configResolver.createFilter(filterSaveValues, false);
            this.props.actions.generalRequest(config.data, config);
        }



        //ulozenie existujuceho filtra
        if (this.state.submitType && this.state.submitType === 'save') {
            let config = configResolver.saveFilter(filterSaveValues, this.props.params.filterId);
            this.props.actions.generalRequest(config.data, config);
        }
        else{
            //ulozi sa do state hodnota formularu, aby sa ten chuj neresetol
            // console.log('set sent values');
            this.state.sentValues=values;
        }


        this.props.actions.requestTasks(configResolver.loadFilterTasks(filterValues));

    };







    componentDidMount() {
        // TODO
        // this.config = configResolver.tasksConfig('project', 141);

        let requestTasksConfig = this.props.params.filterId ? configResolver.tasksConfig('filter', this.props.params.filterId) : configResolver.tasksConfig();
        this.props.actions.requestTasks(requestTasksConfig);
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
        // console.log(!!this.filter && this.filter.columns);
        // console.log(this.state.columns);
        // console.log('creating filter? ',this.state.creatingFilter);

        return (
            <View {...this.props}
                creatingFilter={this.state.creatingFilter}
                sentValues={this.state.sentValues}
                  toggleFilter={this.toggleFilter}
                  filterFormVisible={this.state.filterFormVisible}
                  toggleRowVisibility={this.toggleRowVisibility}
                  visibleFields={this.state.visibleFields}
                  columns={this.filter && this.filter.columns?this.filter.columns:this.state.columns}
                  onSubmit={this.onSubmit}
                  loadTasksFunction={this.loadTasksFunction}
                  getFilterTasks={this.getFilterTasks}
                  saveFilter={this.saveFilter}
                  deleteFilter={this.deleteFilterHandler}
                  createFilter={this.createFilterHandler}
                  canModifyPublicFilters={this.canModifyPublicFilters}
                  getColumnsFromState={this.state.getColumnsFromState}
            />
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
        tasks: state.tasks,
        userAcl:state.auth.user.userRoleAcl
    };
}
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({...actions, ...generalActions}, dispatch)};

}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
