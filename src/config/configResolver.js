import {paths} from './router';
import * as urls from '../api/urls';
import {companyReceived, companyAttributeReceived, statusReceived, userAttributeReceived, taskAttributeReceived, userReceived, unitReceived, imapReceived, smtpReceived, roleReceived } from '../app/redux/actions/settings.action';
import {optionsReceived,usersAllReceived} from '../app/redux/actions/system.actions';
import {taskReceived, tasksReceived, taskAttachmentDeleted} from '../app/redux/actions/tasks.action';
import {profileReceived, avatarUploaded} from '../app/redux/actions/users.action';
import {tagReceived, tagCreated} from '../app/redux/actions/tag.action';
import {projectReceived,projectCreated,projectUsersUpdated,projectUserRemoved,projectAclUpdated} from '../app/redux/actions/project.action';
import {filterReceived,filterOptionsReceived} from '../app/redux/actions/filter.action';

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

    static getUserConfig = (id) => {
        return {
            url: id ? urls.USERS_LIST + '/' + id : urls.USERS_LIST,
            urlList: urls.USERS_LIST,
            afterEntityReceivedAction: userReceived,
            redirectAfterCreation: paths.users,
            // allowedFormFields: ['email','username','language','password']
            remapValues:{'email':'email','username':'username','detailData.function':'detail_data[function]',
                'detailData.name':'detail_data[name]','detailData.surname':'detail_data[surname]','detailData.signature':'detail_data[signature]',
                'detailData.tel':'detail_data[tel]','detailData.facebook':'detail_data[facebook]','detailData.twitter':'detail_data[twitter]',
                'detailData.linkdin':'detail_data[linkdin]','detailData.google':'detail_data[google]','language':'language','is_active':'is_active'},
        }
    };

    static getUserAdditionalConfig = (id, role, company, editing) => {
    return {
        url: urls.USERS_LIST + '/' + (id?id+'/' :'') + 'user-role/'+role + (company?'/company/'+company:''),
    additionalFields:(!editing?{'password':'password'}:{})
    }
    };

    static getCompanyAttributesConfig = (id) => {
        return {
            url: id ? urls.COMPANYATTRIBUTES_LIST + '/' + id : urls.COMPANYATTRIBUTES_LIST,
            urlList: urls.COMPANYATTRIBUTES_LIST,
            afterEntityReceivedAction: companyAttributeReceived,
            redirectAfterCreation: paths.companies_attributes,
            allowedFormFields: ['title', 'description','options','type','is_active'],
            customValuesEnabledOn:['multi_select','checkbox','simple_select']
        }
    };

    static getTaskAttributesConfig = (id) => {
        return {
            url: id ? urls.TASKATTRIBUTES_LIST + '/' + id : urls.TASKATTRIBUTES_LIST,
            urlList: urls.TASKATTRIBUTES_LIST,
            afterEntityReceivedAction: taskAttributeReceived,
            redirectAfterCreation: paths.task_attributes,
            allowedFormFields: ['title','options','type','description','is_active'],
            customValuesEnabledOn:['multi_select','checkbox','simple_select']
        }
    };

    static getUserAttributesConfig = (id) => {
        return {
            url: id ? urls.USERATTRIBUTES_LIST + '/' + id : urls.USERATTRIBUTES_LIST,
            urlList: urls.USERATTRIBUTES_LIST,
            afterEntityReceivedAction: userAttributeReceived,
            redirectAfterCreation: paths.user_attributes,
            allowedFormFields: ['title', 'description','options','type','is_active'],
            customValuesEnabledOn:['multi_select','checkbox','simple_select']
        }
    };

    static getStatusConfig = (id) => {
        return {
            url: id ? urls.STATUSES_LIST + '/' + id : urls.STATUSES_LIST,
            urlList: urls.STATUSES_LIST,
            afterEntityReceivedAction: statusReceived,
            redirectAfterCreation: paths.statuses,
            allowedFormFields: ['title', 'description', 'color']
        }
    };

    static getUnitConfig = (id) => {
        return {
            url: id ? urls.UNITS_LIST + '/' + id : urls.UNITS_LIST,
            urlList: urls.UNITS_LIST,
            afterEntityReceivedAction: unitReceived,
            redirectAfterCreation: paths.units,
            allowedFormFields: ['title', 'shortcut','is_active']
        }
    };

    static getTagConfig = (id) => {
        return {
            url: id ? urls.TAG_LIST + '/' + id : urls.TAG_LIST,
            urlList: urls.TAG_LIST,
            afterEntityReceivedAction: tagReceived,
            //redirectAfterCreation: paths.units,
            allowedFormFields: ['title', 'color','public']
        }
    };
    static tagCreatedConfig = (id) => {
        return {
            url: id ? urls.TAG_LIST + '/' + id : urls.TAG_LIST,
            urlList: urls.TAG_LIST,
            afterEntityReceivedAction: tagCreated,
            //redirectAfterCreation: paths.units,
            allowedFormFields: ['title', 'color','public']
        }
    };


    static filterConfig = (id) => {
        return {
            url: id ? urls.FILTER_LIST + '/' + id : urls.FILTER_LIST,
            urlList: urls.FILTER_LIST,
            afterEntityReceivedAction: filterReceived,
            //redirectAfterCreation: paths.units,
            allowedFormFields: ['title', 'color','public']
        }
    };

    static getAllUsersConfig(){
        return {
            url: urls.USERS_ALL,
            urlList: urls.USERS_ALL,
            afterEntityReceivedAction: usersAllReceived,
        }
    };


    static projectUserConfig(projectId,userId){
        return {
            url: urls.BASE_URL+'/task-bundle/project/'+projectId+'/user/'+userId,
            afterEntityReceivedAction: projectUsersUpdated,
        }
    };

    static projectAclConfig(projectId){
        return {
            url: urls.BASE_URL+'/task-bundle/project/'+projectId+'/process-acl',
            method:'POST',
            // afterEntityReceivedAction: projectAclUpdated,
        }
    };


    static projectUserDeleteConfig(projectId,userId){
        return {
            url: urls.BASE_URL+'/task-bundle/project/'+projectId+'/user/'+userId,
            method:'DELETE',
            message:'User removed from project',
            userId,
            projectId,
            afterRequest: projectUserRemoved,
        }
    };


    static loadFilterOptionList() {
        return {
            url: urls.FILTER_OPTIONS,
            afterEntityReceivedAction: filterOptionsReceived,
        }
    }

    static loadFilterTasks(values) {

        return {
            url: urls.TASK_LIST,
            afterEntityReceivedAction: tasksReceived,
            allowedFormFields: ['status', 'project','creator','requester','company','assigned','tag','follower'],
            data:values,
            dataToParams:true
            // remapValues:{'detailData.function':'detail_data[function]'},
        }
    }


    static getProjectConfig = (id) => {
        return {
            url: id ? urls.PROJECT_LIST + '/' + id : urls.PROJECT_LIST,
            urlList: urls.TAG_LIST,
            afterEntityReceivedAction: projectReceived,
            //redirectAfterCreation: paths.units,
            allowedFormFields: ['title', 'description']
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
            id:id?id:null,
            url: id ? urls.USERS_LIST + '/' + id : urls.USERS_LIST,
            urlList: urls.USERS_LIST,
            uploadUrl: urls.FILE_UPLOAD,
            // allowedFormFields: ['email','detailData.google','detail_data.google'],
            remapValues:{'email':'email','username':'username','detailData.function':'detail_data[function]',
            'detailData.name':'detail_data[name]','detailData.surname':'detail_data[surname]','detailData.signature':'detail_data[signature]',
            'detailData.tel':'detail_data[tel]','detailData.facebook':'detail_data[facebook]','detailData.twitter':'detail_data[twitter]',
            'detailData.linkdin':'detail_data[linkdin]','detailData.google':'detail_data[google]','language':'language'},
            afterEntityReceivedAction: profileReceived
        }
    };

    static getProfileAvatarConfig = (id) => {
        return {
            id:id?id:null,
            url: id ? urls.USERS_LIST + '/' + id : urls.USERS_LIST,
            uploadUrl: urls.FILE_UPLOAD,
            remapValues:{'image':'image'},
        }
    };


    static deleteTaskAttachment(taskId, slug) {
        return {
            url: urls.TASK_LIST + '/' + taskId + '/attachment/' + slug,
            afterFileDeletedAction: taskAttachmentDeleted,
            afterFileDeletedActionParams:{taskId,slug}
        }
    };

    static getImapConfig = (id, projectId) => {
        return {
            url: urls.IMAPS_LIST + (id?'/'+id:'') + (projectId?'/project/'+projectId:''),
            urlList: urls.IMAPS_LIST,
            afterEntityReceivedAction: imapReceived,
            redirectAfterCreation: paths.imaps,
            allowedFormFields: ['inbox_email','move_email','host','port','name','password','ssl','ignore_certificate']
        }
    };

    static getSmtpConfig = (id, projectId) => {
        return {
            url: urls.SMTPS_LIST + (id?'/'+id:''),
            urlList: urls.SMTPS_LIST,
            afterEntityReceivedAction: smtpReceived,
            redirectAfterCreation: paths.smtp,
            allowedFormFields: ['host','port','email','name','password','ssl','tls']
        }
    };

    static getRoleConfig = (id) => {
        return {
            url: urls.ROLES_LIST + (id?'/'+id:''),
            urlList: urls.ROLES_LIST,
            afterEntityReceivedAction: roleReceived,
            redirectAfterCreation: paths.roles,
            allowedFormFields: ['title','description','is_active','order','homepage','acl']
        }
    };

    static tasksConfig = (type,id) => {

        switch(type){
            case 'project':
                return {url: urls.TASK_LIST + '?project=' + id};
            case 'tag':
                return {url: urls.TASK_LIST + '?tag=' + id};
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
}

export default configResolver;