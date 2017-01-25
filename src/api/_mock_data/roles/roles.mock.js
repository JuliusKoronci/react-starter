const roles =
    {
        "data":
            [
                {
                    "id": 1,
                    "title": "ADMIN",
                    "description": "Admin is a main system role. All ACL are available.",
                    "homepage": "/",
                    "acl": "[\"login_to_system\",\"share_filters\",\"project_shared_filters\",\"report_filters\",\"share_tags\",\"create_projects\",\"sent_emails_from_comments\",\"create_tasks\",\"create_tasks_in_all_projects\",\"update_all_tasks\",\"user_settings\",\"user_role_settings\",\"company_attribute_settings\",\"company_settings\",\"status_settings\",\"task_attribute_settings\",\"unit_settings\",\"system_settings\",\"smtp_settings\",\"imap_settings\"]",
                    "is_active": true,
                    "order": 1
                },
                {
                    "id": 2,
                    "title": "MANAGER",
                    "description": null,
                    "homepage": "/",
                    "acl": "[\"login_to_system\",\"create_tasks\",\"create_projects\",\"create_user_with_role_customer\",\"company_settings\",\"report_filters\",\"sent_emails_from_comments\",\"update_all_tasks\"]",
                    "is_active": true,
                    "order": 2
                },
                {
                    "id": 3,
                    "title": "AGENT",
                    "description": null,
                    "homepage": "/",
                    "acl": "[\"login_to_system\",\"create_tasks\",\"create_projects\",\"create_user_with_role_customer\",\"company_settings\",\"sent_emails_from_comments\"]",
                    "is_active": true,
                    "order": 3
                },
                {
                    "id": 4,
                    "title": "CUSTOMER",
                    "description": null,
                    "homepage": "/",
                    "acl": "[\"login_to_system\",\"create_tasks\"]",
                    "is_active": true,
                    "order": 4
                }
            ],
        "_links":
            {
                "self": "/api/v1/task-bundle/user-roles?page=1&isActive=true",
                "first": "/api/v1/task-bundle/user-roles?page=1&isActive=true",
                "prev": false,
                "next": "/api/v1/task-bundle/user-roles?page=2&isActive=true",
                "last": "/api/v1/task-bundle/user-roles?page=3&isActive=true"
            },
        "total": 22,
        "page": 1,
        "numberOfPages": 3
    };

export default roles;