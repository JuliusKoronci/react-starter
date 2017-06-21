import React from 'react';
import DropDown from '../../../../../forms/Task/DropDown.form';

const status = ({task, action, statuses, user}) => {
    // console.log(user);
    // console.log(statuses);
    const options = statuses.map((status) => {
        return {
            'label': status.title,
            'color': status.color || '#666',
            'value': status.id,
            'className': 'uk-badge',
            'selectedClassName': 'md-btn md-btn-wave-light md-btn-block'
        }
    });

    // console.log('user',user);



    return (
        <div>
            <label className="uk-text-muted" style={{marginLeft: '25px'}}>Status</label>

            <div className="uk-input-group">
                <span className="uk-input-group-addon"><i className="material-icons">&#xE896;</i></span>
                {user.map((record) => {
                    return (<DropDown
                            key={record.userId}
                            fieldName="status"
                            options={options}
                            customLabel={record.username}
                            action={action}
                            taskId={task.id}
                            defaultValue={record.statusId}
                            additionalInfo={
                                {
                                    'assigned': parseInt(record.userId,10)
                                }
                            }
                        />
                    )
                })}
                {task.taskHasAssignedUsers.length === 0 && !user.length &&
                <DropDown
                    fieldName="status"
                    options={options}
                    action={action}
                    taskId={task.id}
                    defaultValue=""
                />
                }
            </div>
        </div>
    );
};

export default status;
