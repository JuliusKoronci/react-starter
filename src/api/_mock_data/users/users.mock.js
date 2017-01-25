const users =
    {
        'data': [{
            "id": "1",
            "username": "admin",
            "password": "$2y$13$Ki4oUBYQ0/4eJSluQ.hGyucdHtmWqPI10tl6tqbUF/2iMxWi3CLZy",
            "email": "admin@admin.sk",
            "roles": "[\"ROLE_ADMIN\"]",
            "language": "AJ",
            "is_active": true,
            "image": null,
            "company":{
              "title":'Web Solutions'
            },
            "detailData": {
                "id": 4,
                "name": "Martinka",
                "surname": "Babinska",
                "title_before": null,
                "title_after": null,
                "function": null,
                "mobile": null,
                "tel": null,
                "fax": null,
                "signature": null,
                "street": null,
                "city": null,
                "zip": null,
                "country": null,
                "facebook": "facebook.sk",
                "twitter": "twitter.sk",
                "linkdin": "linkdin.sk",
                "google": "google.sk"
            },
            "user_role": {
                "id": 2,
                "title": "ADMIN",
                "description": null,
                "homepage": "/",
                "acl": "[\"login_to_system\",\"create_tasks\",\"create_projects\",\"create_user_with_role_customer\",\"company_settings\",\"report_filters\",\"sent_emails_from_comments\",\"update_all_tasks\"]",
                "is_active": true,
                "order": 2
            }
        }],
        '_links': {},
        'total': 0,
        'page': 1,
        'numberOfPages': 0,
    };

export default users;