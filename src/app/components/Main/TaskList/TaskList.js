import React, {Component} from 'react';
import View from '../../../views/templates/main/tasks/tasklist.jsx';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/tasks.action';
import configResolver from '../../../../config/configResolver';

class TaskList extends Component {

    componentDidMount() {

        if(this.props.params.projectId) {
            this.config = configResolver.tasksConfig('project', this.props.params.projectId);
        }
        if(this.props.params.tagId){
            this.config = configResolver.tasksConfig('tag', this.props.params.tagId);
        }


        this.props.actions.requestTasks(this.config);
    }

    componentDidUpdate(prevProps) {

        if (prevProps.params !== this.props.params) {

            if(this.props.params.projectId) {
                this.config = configResolver.tasksConfig('project', this.props.params.projectId);
            }
            if(this.props.params.tagId){
                this.config = configResolver.tasksConfig('tag', this.props.params.tagId);
            }

            this.props.actions.requestTasks(this.config);
        }
    }


    loadTasksFunction = (url, e) => {
        this.props.actions.requestTasksFromUrl(url);
    };

    render() {



        return (
            <View {...this.props} loadTasksFunction={this.loadTasksFunction} />
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
            return f.id === ownProps.params.projectId
        });

        if(typeof project[0]!=='undefined') {
            heading = project[0]['title'];
        }
    }

    if(ownProps.params.tagId && Array.isArray(ownProps.tags)) {
        const tag = ownProps.tags.filter((f) => {
            return f.id === ownProps.params.tagId
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