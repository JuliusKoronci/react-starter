export default {
    "data": [
    {
        "id": 59,
        "title": "Task 1 - user is creator, user is requested",
        "description": "Description of Task 1",
        "deadline": null,
        "startedAt": null,
        "closedAt": null,
        "important": false,
        "createdAt": {
            "date": "2017-01-03 22:16:51.000000",
            "timezone_type": 3,
            "timezone": "Europe/Berlin"
        },
        "updatedAt": {
            "date": "2017-01-03 14:16:51.000000",
            "timezone_type": 3,
            "timezone": "Europe/Berlin"
        },
        "taskData": [
            {
                "id": 39,
                "value": "some input",
                "taskAttribute": {
                    "id": 52,
                    "title": "input task additional attribute",
                    "type": "input",
                    "options": null,
                    "is_active": true
                }
            },
            {
                "id": 40,
                "value": "select1",
                "taskAttribute": {
                    "id": 53,
                    "title": "select task additional attribute",
                    "type": "simple_select",
                    "options": "a:3:{s:7:\"select1\";s:7:\"select1\";s:7:\"select2\";s:7:\"select2\";s:7:\"select3\";s:7:\"select3\";}",
                    "is_active": true
                }
            }
        ],
        "project": {
            "id": 86,
            "title": "Project of user 1",
            "description": "Description of project 1.",
            "is_active": false,
            "createdAt": {
                "date": "2017-01-03 14:16:51.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "updatedAt": {
                "date": "2017-01-03 14:16:51.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            }
        },
        "createdBy": {
            "id": 65,
            "username": "user",
            "password": "$2y$13$upBgDlLWe7MhoAzma.kvoufabj4cNAZQ9BgG412hU7KohSLxxZ4NW",
            "email": "user@user.sk",
            "roles": "[\"ROLE_USER\"]",
            "is_active": true,
            "image": null,
            "company": {
                "id": 65,
                "title": "LanSystems",
                "ico": "110258782",
                "dic": "12587458996244",
                "ic_dph": null,
                "street": "Ina cesta 125",
                "city": "Bratislava",
                "zip": "021478",
                "country": "Slovenska Republika",
                "is_active": true
            }
        },
        "requestedBy": {
            "id": 65,
            "username": "user",
            "password": "$2y$13$upBgDlLWe7MhoAzma.kvoufabj4cNAZQ9BgG412hU7KohSLxxZ4NW",
            "email": "user@user.sk",
            "roles": "[\"ROLE_USER\"]",
            "is_active": true,
            "image": null
        },
        "taskHasAssignedUsers": [
            {
                "id": 28,
                "status_date": null,
                "time_spent": null,
                "createdAt": {
                    "date": "2017-01-03 14:16:51.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "updatedAt": {
                    "date": "2017-01-03 14:16:51.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "status": {
                    "id": 84,
                    "title": "Completed",
                    "is_active": true
                },
                "user": {
                    "id": 65,
                    "username": "user",
                    "password": "$2y$13$upBgDlLWe7MhoAzma.kvoufabj4cNAZQ9BgG412hU7KohSLxxZ4NW",
                    "email": "user@user.sk",
                    "roles": "[\"ROLE_USER\"]",
                    "is_active": true,
                    "image": null
                }
            }
        ]
    },
        {
            "id": 58,
            "title": "Task 2 - Mock task",
            "description": "Description of Mock Task",
            "deadline": null,
            "startedAt": null,
            "closedAt": null,
            "important": false,
            "createdAt": {
                "date": "2012-02-02 11:16:51.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "updatedAt": {
                "date": "2017-01-03 14:16:51.000000",
                "timezone_type": 3,
                "timezone": "Europe/Berlin"
            },
            "taskData": [
                {
                    "id": 39,
                    "value": "some input",
                    "taskAttribute": {
                        "id": 52,
                        "title": "input task additional attribute",
                        "type": "input",
                        "options": null,
                        "is_active": true
                    }
                },
                {
                    "id": 40,
                    "value": "select1",
                    "taskAttribute": {
                        "id": 53,
                        "title": "select task additional attribute",
                        "type": "simple_select",
                        "options": "a:3:{s:7:\"select1\";s:7:\"select1\";s:7:\"select2\";s:7:\"select2\";s:7:\"select3\";s:7:\"select3\";}",
                        "is_active": true
                    }
                }
            ],
            "project": {
                "id": 86,
                "title": "Project of user 1",
                "description": "Description of project 1.",
                "is_active": false,
                "createdAt": {
                    "date": "2017-01-03 14:16:51.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                },
                "updatedAt": {
                    "date": "2017-01-03 14:16:51.000000",
                    "timezone_type": 3,
                    "timezone": "Europe/Berlin"
                }
            },
            "createdBy": {
                "id": 65,
                "username": "mock user",
                "password": "$2y$13$upBgDlLWe7MhoAzma.kvoufabj4cNAZQ9BgG412hU7KohSLxxZ4NW",
                "email": "user@user.sk",
                "roles": "[\"ROLE_USER\"]",
                "is_active": true,
                "image": null,
                "company": {
                    "id": 65,
                    "title": "Mock company",
                    "ico": "110258782",
                    "dic": "12587458996244",
                    "ic_dph": null,
                    "street": "Ina cesta 125",
                    "city": "Bratislava",
                    "zip": "021478",
                    "country": "Slovenska Republika",
                    "is_active": true
                }
            },
            "requestedBy": {
                "id": 65,
                "username": "user",
                "password": "$2y$13$upBgDlLWe7MhoAzma.kvoufabj4cNAZQ9BgG412hU7KohSLxxZ4NW",
                "email": "user@user.sk",
                "roles": "[\"ROLE_USER\"]",
                "is_active": true,
                "image": null
            },
            "taskHasAssignedUsers": [
                {
                    "id": 28,
                    "status_date": null,
                    "time_spent": null,
                    "createdAt": {
                        "date": "2017-01-03 14:16:51.000000",
                        "timezone_type": 3,
                        "timezone": "Europe/Berlin"
                    },
                    "updatedAt": {
                        "date": "2017-01-03 14:16:51.000000",
                        "timezone_type": 3,
                        "timezone": "Europe/Berlin"
                    },
                    "status": {
                        "id": 84,
                        "title": "Completed",
                        "is_active": true
                    },
                    "user": {
                        "id": 65,
                        "username": "user",
                        "password": "$2y$13$upBgDlLWe7MhoAzma.kvoufabj4cNAZQ9BgG412hU7KohSLxxZ4NW",
                        "email": "user@user.sk",
                        "roles": "[\"ROLE_USER\"]",
                        "is_active": true,
                        "image": null
                    }
                }
            ]
        }
],
    "_links": {
    "self": "/api/v1/task-bundle/task?page=1&project=145&creator=21",
        "first": "/api/v1/task-bundle/task?page=1&project=145&creator=21",
        "prev": false,
        "next": "/api/v1/task-bundle/task?page=2&project=145&creator=21",
        "last": "/api/v1/task-bundle/task?page=3&project=145&creator=21"
},
    "total": 22,
    "page": 1,
    "numberOfPages": 3
}