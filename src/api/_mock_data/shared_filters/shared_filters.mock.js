const sharedFilters =
{
    "data":
        [
            {
                "order": "1",
                "name": "Assigned",
                "icon": "ikona",
                "role": "Agent,Manager,Admin",
                "description": "filter description",
                "options": null,
                "is_active": true
            }
        ],
    "_links":
    {
        "self": "/api/v1/task-bundle/company-attributes?page=1",
        "first": "/api/v1/task-bundle/company-attributes?page=1",
        "prev": false,
        "next": "/api/v1/task-bundle/company-attributes?page=2",
        "last": "/api/v1/task-bundle/company-attributes?page=3"
    },
    "total": 1,
    "page": 1,
    "numberOfPages": 1
};

export default sharedFilters;