const companies =
{
    "data": {
        "id": "1",
        "title": "Web-Solutions",
        "ico": "1102587",
        "dic": "12587459644",
        "ic_dph": "12587459644",
        "street": "Cesta 125",
        "city": "Bratislava",
        "zip": "02587",
        "country": "SR",
        "companyData": [
            {
                "id": 44,
                "value": "data val",
                "companyAttribute": {
                    "id": 1,
                    "title": "input company additional attribute",
                    "type": "input",
                    "is_active": true
                }
            },
            {
                "id": 45,
                "value": "data valluesgyda gfg",
                "companyAttribute": {
                    "id": 2,
                    "title": "select company additional attribute",
                    "type": "simple_select",
                    "options": "a:3:{s:7:\"select1\";s:7:\"select1\";s:7:\"select2\";s:7:\"select2\";s:7:\"select3\";s:7:\"select3\";}",
                    "is_active": true
                }
            }]
        ,
        "_links": {
            "put": "/api/v1/core-bundle/companies/2",
            "patch": "/api/v1/core-bundle/companies/2",
            "delete": "/api/v1/core-bundle/companies/2"
        }
    }
};

export default companies;