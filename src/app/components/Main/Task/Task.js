import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../../redux/actions/tasks.action';
import * as genActions from '../../../redux/actions/general.action';
import ViewReadOnly from '../../../views/templates/main/task/readOnlyTask.jsx';
import ViewEditable from '../../../views/templates/main/task/editableTask.jsx';
import configResolver from '../../../../config/configResolver';
import {getFromStorage} from '../../../services/storage';
import {TOKEN_KEY} from '../../../../config/security';
class Task extends Component {

    constructor(props, context) {
        super(props, context);
    }

    handleFileUpload = (acceptedFiles) => {
        let formData = new FormData();
        acceptedFiles.map((file) => {
            name = file.name;
            formData.append(file.name, file)
        });
        const token = getFromStorage(TOKEN_KEY);
        fetch('https://dev.lanhelpdesk.com/api/v1/core-bundle/cdn/upload/task/' + this.props.task.id, {
            headers: {
                'Authorization': 'Bearer ' + token
            },
            method: 'POST',
            body: formData
        }).then(response => console.log(response))
    };

    handleFileDownload=(slug)=>{
        this.props.actions.downloadFile(slug, configResolver.getDownloadFileConfig());
    };

    componentWillMount() {
        this.props.actions.loadTaskById(this.props.params.taskId);
        this.props.actions.loadEntityList(configResolver.loadStatusList());
        this.props.actions.loadEntityList(configResolver.loadProjectList());
    }

    render() {
        if (this.props.task) {
            return this.renderTask()
        } else {
            return <p>Task id: {this.props.params.taskId} ...</p>
        }
    }

    renderTask = () => {
        if (this.props.canEdit) {
            return (<ViewEditable setValues={this.setValues} handleFileUpload={this.handleFileUpload} handleFileDownload={this.handleFileDownload}
                                  {...this.props}/>);
        }

        return (<ViewReadOnly {...this.props}/>);
    }
}

Task.propTypes = {
    //myProp: PropTypes.string.isRequired
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state, ownProps) {
    const taskId = ownProps.params.taskId;
    const task = state.tasks.data.filter((task) => parseInt(task.id, 10) === parseInt(taskId, 10));
    return {
        task: task.length > 0 ? task[0] : false,
        canEdit: true,
        user: state.auth.user,
        statuses: state.statuses.data,
        projects: state.projects
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...genActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);