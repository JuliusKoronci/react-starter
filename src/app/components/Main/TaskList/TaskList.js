import React, {Component} from 'react';
import View from '../../../views/templates/main/tasks/tasklist.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/tasks.action';
import configResolver from '../../../../config/configResolver';

class TaskList extends Component {


    constructor(props, context) {
        super(props, context);

        this.state={
            search:'',
            orderBy:'',
            orderDirection:'',
            hasSearch:false,
            canOrder:false,
        };


    }



    componentDidMount() {

        if(this.props.params.projectId || this.props.params.tagId){
            this.setState({hasSearch:true,canOrder:true});
        }

        // if(this.props.params.projectId) {
        //     this.config = configResolver.tasksConfig('project', this.props.params.projectId);
        // }
        // if(this.props.params.tagId){
        //     this.config = configResolver.tasksConfig('tag', this.props.params.tagId);
        // }
        //
        // this.props.actions.requestTasks(this.config);

        this.requestTasks();

    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.params !== this.props.params) {

            this.requestTasks();

        }
    }


    requestTasks=()=>{

        let options={
            // orderBy:'title=>ASC',
            // orderBy:'title=>DESC',
            orderBy:this.state.orderBy?this.state.orderBy+'=>'+this.state.orderDirection:'',
            searchText:this.state.search
        };

        if(this.props.params.projectId) {
            this.config = configResolver.tasksConfig('project', this.props.params.projectId, options);
        }
        if(this.props.params.tagId){
            this.config = configResolver.tasksConfig('tag', this.props.params.tagId, options);
        }

        this.props.actions.requestTasks(this.config);
    };




    loadTasksFunction = (url, e) => {
        this.props.actions.requestTasksFromUrl(url);
    };



    searchChangeHandler=(e)=>{
    let value=e.target.value;
    this.setState({search:value},this.requestTasks);
    };



    orderByChangeHandler=(e)=>{
// console.log('orderby');
        let direction='ASC';
        let orderBy=e.target.getAttribute('data-order-by');
        //change direction

        if(this.state.orderBy === orderBy){
            if(this.state.orderDirection==='ASC'){
                direction='DESC';
            }
            if(this.state.orderDirection==='DESC'){
                direction='ASC';
            }
        }

        this.setState({
            orderBy:orderBy,
            orderDirection:direction
        },this.requestTasks);

        // this.requestTasks();
    };


    render() {



        return (
            <View
                {...this.props}
                state={this.state}
                  loadTasksFunction={this.loadTasksFunction}
                  searchChange={this.searchChangeHandler}
                  orderByChange={this.orderByChangeHandler}
                  searchText={this.state.search}
                  orderBy={this.state.orderBy}
                  orderDirection={this.state.orderDirection}
                reloadTasks={this.requestTasks}
                hasSearch={this.state.hasSearch}
                canOrder={this.state.canOrder}
            />
        );
    }
}

function mapStateToProps(state, ownProps) {
    const filter = state.filter.filter((f) => {
        return f.id === ownProps.params.filterId
    })[0];

    let heading='Dashboard';

    if(ownProps.params.projectId && Array.isArray(ownProps.projects)) {
        const project = ownProps.projects.filter((f) => {
            return f.id === parseInt(ownProps.params.projectId,10);
        });

        if(typeof project[0]!=='undefined') {
            heading = project[0]['title'];
        }
    }

    if(ownProps.params.tagId && Array.isArray(ownProps.tags)) {
        const tag = ownProps.tags.filter((f) => {
            return f.id === parseInt(ownProps.params.tagId,10);
        });

        if(typeof tag[0]!=='undefined') {
            heading = tag[0]['title'];
        }
    }

    return {
        tasks: state.tasks,
        filter,
        heading
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);