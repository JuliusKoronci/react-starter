import {paths} from './router';
import * as urls from '../api/urls';
import {
    companyReceived,
    companyAttributeReceived,
    statusReceived,
    userAttributeReceived,
    taskAttributeReceived,
    userReceived,
    unitReceived,
    imapReceived,
    smtpReceived,
    roleReceived
} from '../app/redux/actions/settings.action';
import {optionsReceived, usersAllReceived, projectAssignersReceived} from '../app/redux/actions/system.actions';
import {taskReceived, tasksReceived, taskAttachmentDeleted} from '../app/redux/actions/tasks.action';
import {profileReceived, avatarUploaded} from '../app/redux/actions/users.action';
import {tagReceived, tagCreated} from '../app/redux/actions/tag.action';
import {
    projectReceived,
    projectCreated,
    projectUsersUpdated,
    projectUserRemoved,
    projectAclUpdated,
    projectsWhereUserCanAddTaskReceived
} from '../app/redux/actions/project.action';
import {filterReceived, filterOptionsReceived} from '../app/redux/actions/filter.action';

class configResolver {
    static getCompanyConfig = (id) => {
        return {
            url: id ? urls.COMPANIES_LIST + '/' + id : urls.COMPANIES_LIST,
            urlList: urls.COMPANIES_LIST,
            afterEntityReceivedAction: companyReceived,
            redirectAfterCreation: paths.companies,
            allowedFormFields: ['city', 'country', 'dic', 'ic_dph', 'ico', 'street', 'title', 'zip']
        }
    };

    static companyUpdate = (id) => {
        return {
            url: urls.COMPANIES_LIST + (id ? '/' + id : ''),
            urlList: urls.COMPANIES_LIST,
            allowedFormFields: ['city', 'country', 'dic', 'ic_dph', 'ico', 'street', 'title', 'zip'],
            redirectAfter: paths.companies,
        }
    };

    static getUserConfig = (id) => {
        return {
            url: id ? urls.USERS_LIST + '/' + id : urls.USERS_LIST,
            urlList: urls.USERS_LIST,
            afterEntityReceivedAction: userReceived,
            redirectAfterCreation: paths.users,
            // allowedFormFields: ['email','username','language','password']
            remapValues: {
                'email': 'email',
                'username': 'username',
                'detailData.function': 'detail_data[function]',
                'detailData.name': 'detail_data[name]',
                'detailData.surname': 'detail_data[surname]',
                'detailData.signature': 'detail_data[signature]',
                'detailData.tel': 'detail_data[tel]',
                'detailData.facebook': 'detail_data[facebook]',
                'detailData.twitter': 'detail_data[twitter]',
                'detailData.linkdin': 'detail_data[linkdin]',
                'detailData.google': 'detail_data[google]',
                'language': 'language',
                'is_active': 'is_active'
            },
        }
    };


    static userUpdate = (id) => {

        return {
            url: id ? urls.USERS_LIST + '/' + id : urls.USERS_LIST,
            urlList: urls.USERS_LIST,
            redirectAfter: paths.users,
            remapValues: {
                'email': 'email',
                'username': 'username',
                'detailData.function': 'detail_data[function]',
                'detailData.name': 'detail_data[name]',
                'detailData.surname': 'detail_data[surname]',
                'detailData.signature': 'detail_data[signature]',
                'detailData.tel': 'detail_data[tel]',
                'detailData.facebook': 'detail_data[facebook]',
                'detailData.twitter': 'detail_data[twitter]',
                'detailData.linkdin': 'detail_data[linkdin]',
                'detailData.google': 'detail_data[google]',
                'language': 'language',
                'is_active': 'is_active'
            },
        }
    };


    static getUserAdditionalConfig = (id, role, company, editing) => {
        return {
            url: urls.USERS_LIST + '/' + (id ? id + '/' : '') + 'user-role/' + role + (company ? '/company/' + company : ''),
            additionalFields: (!editing ? {'password': 'password'} : {})
        }
    };

    static getCompanyAttributesConfig = (id) => {
        return {
            url: id ? urls.COMPANYATTRIBUTES_LIST + '/' + id : urls.COMPANYATTRIBUTES_LIST,
            urlList: urls.COMPANYATTRIBUTES_LIST,
            afterEntityReceivedAction: companyAttributeReceived,
            redirectAfterCreation: paths.companies_attributes,
            allowedFormFields: ['title', 'description', 'options', 'type', 'is_active'],
            customValuesEnabledOn: ['multi_select', 'simple_select']
        }
    };

    static companyAttributeUpdate = (id) => {
        return {
            url: id ? urls.COMPANYATTRIBUTES_LIST + '/' + id : urls.COMPANYATTRIBUTES_LIST,
            urlList: urls.COMPANYATTRIBUTES_LIST,
            allowedFormFields: ['title', 'description', 'options', 'type', 'is_active'],
            redirectAfter: paths.companies_attributes,
        }
    };


    static getTaskAttributesConfig = (id) => {
        return {
            url: id ? urls.TASKATTRIBUTES_LIST + '/' + id : urls.TASKATTRIBUTES_LIST,
            urlList: urls.TASKATTRIBUTES_LIST,
            afterEntityReceivedAction: taskAttributeReceived,
            redirectAfterCreation: paths.task_attributes,
            allowedFormFields: ['title', 'options', 'type', 'description', 'is_active'],
            customValuesEnabledOn: ['multi_select', 'simple_select']
        }
    };

    static taskAttributeUpdate = (id) => {
        return {
            url: id ? urls.TASKATTRIBUTES_LIST + '/' + id : urls.TASKATTRIBUTES_LIST,
            urlList: urls.TASKATTRIBUTES_LIST,
            redirectAfter: paths.task_attributes,
            allowedFormFields: ['title', 'options', 'type', 'description', 'is_active'],
        }
    };



    static getUserAttributesConfig = (id) => {
        return {
            url: id ? urls.USERATTRIBUTES_LIST + '/' + id : urls.USERATTRIBUTES_LIST,
            urlList: urls.USERATTRIBUTES_LIST,
            afterEntityReceivedAction: userAttributeReceived,
            redirectAfterCreation: paths.user_attributes,
            allowedFormFields: ['title', 'description', 'options', 'type', 'is_active'],
            customValuesEnabledOn: ['multi_select', 'simple_select']
        }
    };
    static userAttributeUpdate = (id) => {
        return {
            url: id ? urls.USERATTRIBUTES_LIST + '/' + id : urls.USERATTRIBUTES_LIST,
            urlList: urls.USERATTRIBUTES_LIST,
            redirectAfter: paths.user_custom_fields,
            allowedFormFields: ['title', 'description', 'options', 'type', 'is_active'],
        }
    };

    static getStatusConfig = (id) => {
        return {
            url: id ? urls.STATUSES_LIST + '/' + id : urls.STATUSES_LIST,
            urlList: urls.STATUSES_LIST,
            afterEntityReceivedAction: statusReceived,
            redirectAfterCreation: paths.statuses,
            allowedFormFields: ['title', 'description', 'color','order']
        }
    };

    static statusUpdate = (id) => {
        return {
            url: id ? urls.STATUSES_LIST + '/' + id : urls.STATUSES_LIST,
            urlList: urls.STATUSES_LIST,
            redirectAfter: paths.statuses,
            allowedFormFields: ['title', 'description', 'color','order']
        }
    };

    static getUnitConfig = (id) => {
        return {
            url: id ? urls.UNITS_LIST + '/' + id : urls.UNITS_LIST,
            urlList: urls.UNITS_LIST,
            afterEntityReceivedAction: unitReceived,
            redirectAfterCreation: paths.units,
            allowedFormFields: ['title', 'shortcut', 'is_active']
        }
    };

    static unitUpdate = (id) => {
        return {
            url: id ? urls.UNITS_LIST + '/' + id : urls.UNITS_LIST,
            urlList: urls.UNITS_LIST,
            redirectAfter: paths.units,
            allowedFormFields: ['title', 'shortcut', 'is_active']
        }
    };

    static getTagConfig = (id) => {
        return {
            url: id ? urls.TAG_LIST + '/' + id : urls.TAG_LIST,
            urlList: urls.TAG_LIST,
            afterEntityReceivedAction: tagReceived,
            //redirectAfterCreation: paths.units,
            allowedFormFields: ['title', 'color', 'public']
        }
    };
    static tagCreatedConfig = (id) => {
        return {
            url: id ? urls.TAG_LIST + '/' + id : urls.TAG_LIST,
            urlList: urls.TAG_LIST,
            afterEntityReceivedAction: tagCreated,
            //redirectAfterCreation: paths.units,
            allowedFormFields: ['title', 'color', 'public']
        }
    };


    static filterConfig = (id) => {
        return {
            url: id ? urls.FILTER_LIST + '/' + id : urls.FILTER_LIST,
            urlList: urls.FILTER_LIST,
            afterEntityReceivedAction: filterReceived,
            //redirectAfterCreation: paths.units,
            allowedFormFields: ['title', 'color', 'public']
        }
    };

    static getAllUsersConfig() {
        return {
            url: urls.USERS_ALL,
            urlList: urls.USERS_ALL,
            afterEntityReceivedAction: usersAllReceived,
        }
    };


    static projectUserConfig(projectId, userId) {
        return {
            url: urls.BASE_URL + '/task-bundle/project/' + projectId + '/user/' + userId,
            afterEntityReceivedAction: projectUsersUpdated,
        }
    };

    static projectAclConfig(projectId) {
        return {
            url: urls.BASE_URL + '/task-bundle/project/' + projectId + '/process-acl',
            method: 'POST',
            contentType: 'default',
            jsonStringify: true
            // afterEntityReceivedAction: projectAclUpdated,
        }
    };


    static projectUserDeleteConfig(projectId, userId) {
        return {
            url: urls.BASE_URL + '/task-bundle/project/' + projectId + '/user/' + userId,
            method: 'DELETE',
            message: 'User removed from project',
            userId,
            projectId,
            afterRequest: projectUserRemoved,
        }
    };


    static saveFilter(values,filterId) {

        const method = filterId ? 'PUT' : 'POST';
        const url = filterId ? urls.BASE_URL + '/task-bundle/filters/' + filterId : urls.BASE_URL + '/task-bundle/filters';

        let config = {
            url,
            method,
            data:values,
            remapValues: {
                'title': 'title',
                'status': 'filter[status]',
                'project': 'filter[project]',
                'requester': 'filter[requester]',
                'company': 'filter[company]',
                'creator': 'filter[creator]',
                'assigned': 'filter[assigned]',
                'tag': 'filter[tag]',
                'search': 'filter[search]',
                'columns': 'columns',
                'closedTime':'filter[closedTime]',
                'startedTime':'filter[startedTime]',
                'deadlineTime':'filter[deadlineTime]',
                'createdTime':'filter[createdTime]',
            }
            // contentType:'default',
            // jsonStringify:true
            // afterEntityReceivedAction: projectAclUpdated,
        };

        if (values) {
            let newValues = {};
            Object.keys(config.remapValues).map((key) => {
                if (values.hasOwnProperty(key) && typeof values[key] !== 'undefined' && values[key] !== '') {
                    newValues[key] = values[key];
                }
            });
            config.data = newValues;
        }

        return config;
    };


    static loadFilterOptionList() {
        return {
            url: urls.FILTER_OPTIONS,
            afterEntityReceivedAction: filterOptionsReceived,
        }
    }

    static loadFilterTasks(values) {
        let config = {
            url: urls.TASK_LIST,
            afterEntityReceivedAction: tasksReceived,
            allowedFormFields: ['status', 'project', 'creator', 'requester', 'company', 'assigned', 'tag', 'follower', 'search','closedTime','startedTime','deadlineTime','createdTime'],
            data: values,
            dataToParams: true
        };

        if (values) {
            let newValues = {};
            config.allowedFormFields.map((key) => {
                if (values.hasOwnProperty(key) && typeof values[key] !== 'undefined' && values[key] !== '') {
                    newValues[key] = values[key];
                }
            });
            config.data = newValues;
        }
        return config;
    }


    static getProjectConfig = (id) => {
        return {
            url: id ? urls.PROJECT_LIST + '/' + id : urls.PROJECT_LIST,
            urlList: urls.TAG_LIST,
            afterEntityReceivedAction: projectReceived,
            //redirectAfterCreation: paths.units,
            allowedFormFields: ['title', 'description','is_active']
        }
    };

    static projectCreatedConfig = (id) => {
        return {
            url: id ? urls.PROJECT_LIST + '/' + id : urls.PROJECT_LIST,
            urlList: urls.TAG_LIST,
            afterEntityReceivedAction: projectCreated,
            //redirectAfterCreation: paths.units,
            allowedFormFields: ['title', 'description']
        }
    };

    static getProfileConfig = (id) => {
        return {
            id: id ? id : null,
            url: id ? urls.USERS_LIST + '/' + id : urls.USERS_LIST,
            urlList: urls.USERS_LIST,
            uploadUrl: urls.FILE_UPLOAD,
            // allowedFormFields: ['email','detailData.google','detail_data.google'],
            remapValues: {
                'email': 'email',
                'username': 'username',
                'detailData.function': 'detail_data[function]',
                'detailData.name': 'detail_data[name]',
                'detailData.surname': 'detail_data[surname]',
                'detailData.signature': 'detail_data[signature]',
                'detailData.tel': 'detail_data[tel]',
                'detailData.facebook': 'detail_data[facebook]',
                'detailData.twitter': 'detail_data[twitter]',
                'detailData.linkdin': 'detail_data[linkdin]',
                'detailData.google': 'detail_data[google]',
                'language': 'language'
            },
            afterEntityReceivedAction: profileReceived
        }
    };


    static passwordResetConfig = (id) => {
        return {
            url: urls.USERS_LIST + '/' + id +'/reset-password',
            method:'POST',
            // urlList: urls.USERS_LIST,
            allowedFormFields: ['password','password_repeat'],
            message:'password changed'
            // afterEntityReceivedAction: profileReceived
        }
    };


    static projectAssigners = (id) => {
        return {
            url:urls.PROJECT_ASSIGNERS + '/' + id,
            afterEntityReceivedAction: projectAssignersReceived,
        }
    };

    static getProfileAvatarConfig = (id) => {
        return {
            id: id ? id : null,
            url: id ? urls.USERS_LIST + '/' + id : urls.USERS_LIST,
            uploadUrl: urls.FILE_UPLOAD,
            remapValues: {'image': 'image'},
        }
    };

    static fileUploadConfig = () => {
        return {
            url: urls.FILE_UPLOAD,
            uploadUrl: urls.FILE_UPLOAD,
            remapValues: {'image': 'image'},
        }
    };


    static taskUpdate(taskId) {
        return {
            url: urls.TASK_LIST + '/quick-update/' + taskId,
            // allowedFormFields: ['title','description','work','workTime'],
            remapValues:{
                'title':'title',
                'description':'description',
                'work':'work',
                'work_time':'workTime',
                'started_at':'startedAt',
                'deadline':'deadline',
                'closed_at':'closedAt',
                'project':'project',
                'assigned':'assigned',
                'company':'company',
                'requester':'requester',
                'important':'important',
                'tags':'tag',
                'task_data':'task_data'
            },
            jsonStringify:true,
            // contentType:'default',
            // afterFileDeletedAction: taskAttachmentDeleted,
            // afterFileDeletedActionParams: {taskId, slug}
        }
    };


    static deleteTaskAttachment(taskId, slug) {
        return {
            url: urls.TASK_LIST + '/' + taskId + '/attachment/' + slug,
            afterFileDeletedAction: taskAttachmentDeleted,
            afterFileDeletedActionParams: {taskId, slug}
        }
    };

    static getImapConfig = (id, projectId) => {
        return {
            url: urls.IMAPS_LIST + (id ? '/' + id : '') + (projectId ? '/project/' + projectId : ''),
            urlList: urls.IMAPS_LIST,
            afterEntityReceivedAction: imapReceived,
            redirectAfterCreation: paths.imaps,
            allowedFormFields: ['inbox_email', 'move_email', 'host', 'port', 'name', 'password', 'ssl', 'ignore_certificate']
        }
    };

    static imapUpdate = (id, projectId) => {
        return {
            url: urls.IMAPS_LIST + (id ? '/' + id : '') + (projectId ? '/project/' + projectId : ''),
            urlList: urls.IMAPS_LIST,
            allowedFormFields: ['inbox_email', 'move_email', 'host', 'port', 'name', 'password', 'ssl', 'ignore_certificate'],
            redirectAfter: paths.imaps,
        }
    };

    static getSmtpConfig = (id, projectId) => {
        return {
            url: urls.SMTPS_LIST + (id ? '/' + id : ''),
            urlList: urls.SMTPS_LIST,
            afterEntityReceivedAction: smtpReceived,
            redirectAfterCreation: paths.smtps,
            allowedFormFields: ['host', 'port', 'email', 'name', 'password', 'ssl', 'tls']
        }
    };

    static smtpDeleteConfig = (id) => {
        return {
            url: urls.SMTPS_LIST + (id ? '/' + id : ''),
            urlList: urls.SMTPS_LIST,
            redirectAfterDelete: paths.smtps,
        }
    };

    static smtpUpdate = (id) => {
        return {
            url: urls.SMTPS_LIST + (id ? '/' + id : ''),
            urlList: urls.SMTPS_LIST,
            allowedFormFields: ['host', 'port', 'email', 'name', 'password', 'ssl', 'tls'],
            redirectAfter: paths.smtps,
        }
    };


    static getRoleConfig = (id) => {
        return {
            url: urls.ROLES_LIST + (id ? '/' + id : ''),
            urlList: urls.ROLES_LIST,
            afterEntityReceivedAction: roleReceived,
            redirectAfterCreation: paths.roles,
            allowedFormFields: ['title', 'description', 'is_active', 'order', 'homepage', 'acl']
        }
    };

    static roleUpdate = (id) => {
        return {
            url: urls.ROLES_LIST + (id ? '/' + id : ''),
            urlList: urls.ROLES_LIST,
            allowedFormFields: ['title', 'description', 'is_active', 'order', 'homepage', 'acl'],
            redirectAfter: paths.roles,
        }
    };

    static tasksConfig = (type, id) => {

        if (!type) {
            return {url: urls.TASK_LIST}
        }

        switch (type) {
            case 'project':
                return {url: urls.TASK_LIST + '?project=' + id};
            case 'tag':
                return {url: urls.TASK_LIST + '?tag=' + id};
            case 'filter':
                return {url: urls.TASK_LIST + '/filter/' + id};
            default:
                return {url: urls.TASK_LIST}
        }
    };

    static getDownloadFileConfig = () => {
        return {
            url: urls.LOAD_ATTACHMENT
        }
    };

    static getAssignUserConfig(taskId, userId) {
        return {
            url: urls.TASK_LIST + '/' + taskId + '/assign-user/' + userId
        }
    };

    static changeStatusConfig(taskId, userId, statusId) {
        return {
            url: urls.TASK_LIST + '/' + taskId + '/assign-user/' + userId + '/status/' + statusId
        }
    };

    static loadOptionList(taskId) {
        return {
            url: urls.OPTION_LIST + '/' + taskId,
            afterEntityReceivedAction: optionsReceived,
        }
    }

    static updateProject(projectId, taskId) {
        return {
            url: urls.TASK_LIST + '/' + taskId + '/project/' + projectId,
            afterEntityReceivedAction: taskReceived,
        }
    }

    static assignUser(values, taskId, statusId) {
        return {
            url: urls.TASK_LIST_QUICK + '/' + taskId,
            afterEntityReceivedAction: taskReceived,
            values: {
                'assigned': values.map((val) => {
                    return {
                        userId: val.value,
                        statusId
                    }
                })
            }
        }
    }

    static addTags(values, taskId) {
        return {
            url: urls.TASK_LIST_QUICK + '/' + taskId,
            afterEntityReceivedAction: taskReceived,
            values: {
                'tag': values.map((val) => {
                    return {
                        title: val.label,
                    }
                })
            }
        }
    }

    static updateRequester(userId, taskId) {
        return {
            url: urls.TASK_LIST_QUICK + '/' + taskId,
            afterEntityReceivedAction: taskReceived,
            values: {
                'requester': userId
            }
        }
    }

    static updateCompany(companyId, taskId) {
        return {
            url: urls.TASK_LIST_QUICK + '/' + taskId,
            afterEntityReceivedAction: taskReceived,
            values: {
                'company': companyId
            }
        }
    }

    static addMaterial(data, taskId) {
        return {
            url: urls.TASK_LIST + '/' + taskId + '/invoiceable-items/unit/' + data.unit.value,
            afterEntityReceivedAction: taskReceived,
            values: {
                'title': data.name.value,
                'amount': data.quantity.value,
                'unit_price': data.price.value
            }
        }
    }

    static createTask() {
        return {
            url: urls.TASK_LIST,
            jsonStringify:true,
        }
    }

    static addTaskComment(taskId) {
        return {
            url: urls.TASK_LIST + '/'+taskId+'/comments',
            taskId
        }
    }

    static loadProjectsWhereUserCanAddTask(){
        return{
            url:urls.PROJECTS_WHERE_USER_CAN_ADD_TASK,
            afterEntityReceivedAction: projectsWhereUserCanAddTaskReceived,
        }
    }
}



export default configResolver;