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

        this.props.actions.taskUpload(formData,this.props.params.taskId);
    };

    handleFileDownload=(slug)=>{
        this.props.actions.downloadFile(slug, configResolver.getDownloadFileConfig());
    };

    handleFileDelete=(slug,e)=>{
        this.props.actions.deleteFile(slug, configResolver.deleteTaskAttachment(this.props.params.taskId,slug));
        e.preventDefault();
    };

    componentWillMount() {
        this.props.actions.loadTaskById(this.props.params.taskId);
        this.props.actions.loadEntityList(configResolver.loadOptionList(this.props.params.taskId));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.task !== this.props.task) {
            this.props.actions.loadEntityList(configResolver.loadOptionList(this.props.params.taskId));
        }
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
            return (<ViewEditable handleFileUpload={this.handleFileUpload} handleFileDownload={this.handleFileDownload} handleFileDelete={this.handleFileDelete}
                                  {...this.props}/>);
        }

        return (<ViewReadOnly {...this.props}/>);
    }
}

Task.propTypes = {
    //myProp: PropTypes.string.isRequired
    actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {
    const task = state.tasks.task.data || false;
    return {
        task: task,
        options: state.tasks.options,
        canEdit: task ? task.canEdit : false,
        user: state.auth.user
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actions, ...genActions}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);