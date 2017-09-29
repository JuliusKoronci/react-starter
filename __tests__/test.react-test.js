import taskReducer from 'src/app/redux/reducers/tasks/tasks.reducer';


describe('Request reducer', ()=>{

    it('has default state', ()=>{
        expect(taskReducer.tasks(undefined)).toEqual({
            'data': [],
            '_links': {},
            'total': 0,
            'page': 1,
            'numberOfPages': 0,
            'options': {
                'status': [],
                'project': [],
                'requester': [],
                'company': [],
                'tag': [],
                'assigner': [],
                'unit': [],
                'taskAttributes': [],
            },
            'task': {}
        });
    });

});