import React from 'react';
import Select from '../../../../../forms/Task/Select.form';


const main = ({inputChangeHandler, newTaskProject, userProjects, newTaskAssigner, options}) => {

    const assignedOptions = options.assigner.map(r => {
        return {id: r.id, title: r.username}
    });

    console.log(newTaskAssigner)
    // options.project = [];
    options.project = userProjects;


    return (
        <div className="md-list md-list-addon">

            <Select label="Project"
                    icon="&#xE2C8;"
                    defaultValue={newTaskProject || ''}
                    options={options.project}
                    value={newTaskProject}
                    name='newTaskProject'
                    action={(e) => {
                        inputChangeHandler('newTaskProject', e.target.value)
                    }}

            />



                <Select label="Assigned"
                        icon="&#xE7FD;"
                        defaultValue={newTaskAssigner && newTaskAssigner[0] && newTaskAssigner[0]['userId'] ? newTaskAssigner[0]['userId'] : ''}
                        options={assignedOptions}
                        action={(e) => {
                            inputChangeHandler('newTaskAssigner', [{userId: e.target.value}])
                        }}/>


        </div>
    );
};


export default main;
