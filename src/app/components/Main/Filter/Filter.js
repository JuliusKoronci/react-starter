import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../../../redux/actions/tasks.action';
import * as generalActions from '../../../redux/actions/general.action';
import configResolver from '../../../../config/configResolver';

import View from '../../../views/templates/main/filter/filter.jsx';


class Filter extends Component {

    constructor(props, context) {
        super(props, context);

        this.filterConfig = configResolver.filterConfig(props.params.filterId);
        this.filterOptionsConfig = configResolver.loadFilterOptionList();
        this.filterTasksConfig = configResolver.loadFilterTasks();

        this.state = {
            filterFormVisible: true,
            // visibleFields:{'taskName':true},

            // columns:{
            //     title:true,
            //     status:false,
            //     project:false,
            //     created:false,
            //     requester:false,
            //     company:false,
            //     assigned:false,
            //     context:false,
            //     owner:false,
            //     deadline:false,
            // }


            // columns:{
            //     title:{label:'Title',visible:true},
            //     status:{label:'Status'},
            //     project:{label:'Project'},
            //     created:{label:'Created'},
            //     requester:{label:'Requester'},
            //     company:{label:'Company'},
            //     assigned:{label:'Assigned'},
            //     context:{label:'Context'},
            //     owner:{label:'Owner'},
            //     deadline:{label:'Deadline'},
            // }


            columns: [
                {title: true},
                {status: false},
                {project: false},
                {creator: false},
                {requester: false},
                {company: false},
                {assigned: false},
                {tag: false},
                {owner: false},
                {deadline: false},
            ]

        }
    }


    loadTasksFunction = (url, e) => {
        this.props.actions.requestTasksFromUrl(url);
    };


    deleteHandler = (id) => {
        alert('delete handler');
        // this.props.actions.deleteEntity(this.props.params.companyId, this.companyConfig);
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





    onSubmit = (values, e) => {

        // console.log(this.state.columns);
        // console.log(values.columns);


        let columns = this.state.columns.map((column) => {
            let key = Object.keys(column)[0];
            // console.log(key);
            // console.log(values.columns.hasOwnProperty(key));
            // console.log(typeof column[key] !== 'undefined');
            // console.log(!!values.columns[key]);
            if (values.columns && values.columns.hasOwnProperty(key) && typeof column[key] !== 'undefined' && (!!values.columns[key])) {
                return {[key]: true};
            } else {
                return {[key]: false};
            }
        });
        this.setState({columns: columns ? columns : []});


        // console.log(columns);

        // if(values.columns) {
        //     let columns = Object.keys(values.columns).map((column) => {
        //
        //         if(column.hasOwnProperty(name)&& typeof column[name] !== 'undefined' && (!!column[name])) {
        //
        //         }
        //
        //         return
        //     });
        //     console.log(columns);
        // }

        let newFilterValues={};
        if(values.filter) {
            Object.keys(values.filter).map((key) => {
                //console.log(values.filter[key]);
                if ((values.filter.hasOwnProperty(key) && typeof values.filter[key] !== 'undefined' && values.filter[key] !== '' && values.filter[key])) {
                    newFilterValues[key] = values.filter[key];
                }
            });
        }

        // console.log(newFilterValues)
        // console.log(values)
        values.filter=newFilterValues;

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
            this.props.actions.generalRequest(filterSaveValues, configResolver.saveFilter(this.props.params.filterId));
        }


        this.props.actions.requestTasks(configResolver.loadFilterTasks(filterValues));


        // console.log('columns',this.state.columns);
        // if (this.props.params.companyId) {
        //     this.props.actions.updateEntity(this.props.params.companyId, values, this.companyConfig);
        // } else {
        //     this.props.actions.createEntity(values,this.companyConfig);
        // }
    };


    componentDidMount() {
        // TODO
        // this.config = configResolver.tasksConfig('project', 141);
        let config = configResolver.tasksConfig();

        this.props.actions.requestTasks(config);

    }


    toggleFilter = (e) => {
        this.setState({filterFormVisible: !this.state.filterFormVisible})
    };


    changeRowVisibility = (value, e) => {
        alert('change row visibility');
    }

    toggleRowVisibility = (value, e) => {

        // console.log(e,value);
        // let name=e.target.name;
        let name = value;
        let checked = !!e.target.checked;

        // console.log(e.target.name, checked);

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

    // console.log(state);
    const filterId = ownProps.params.filterId;

    // const filter = state.filters.data.filter((filter) => parseInt(filter.id, 10) === parseInt(filterId, 10));
    const filter = state.filter.filter((filter) => parseInt(filter.id, 10) === parseInt(filterId, 10));
    const filterOptions = state.filters.options || [];
    // console.log(filterOptions);
    // const filter =[];
    // console.log(filter);

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
