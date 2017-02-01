import React from 'react';
import DropDown from '../../../../../forms/Task/DropDown.form';

const status = ({task, action}) => {
    const options = [
        {
            'label': 'NEW',
            'color': '#2da3ec',
            'value': 5,
            'className': 'uk-badge uk-badge-new',
            'selectedClassName': 'md-btn md-btn-wave-light md-btn-block'
        },
        {
            'label': 'OPEN',
            'value': 1,
            'color': '#80BA52',
            'className': 'uk-badge uk-badge-open',
            'selectedClassName': 'md-btn md-btn-wave-light md-btn-block'
        },
        {
            'label': 'SOLVED',
            'value': 2,
            'color': '#0097a7',
            'className': 'uk-badge uk-badge-solved',
            'selectedClassName': 'md-btn md-btn-wave-light md-btn-block'
        },
        {
            'label': 'PENDING',
            'value': 3,
            'color': '#ff9c00',
            'className': 'uk-badge uk-badge-pending',
            'selectedClassName': 'md-btn md-btn-wave-light md-btn-block'
        },
        {
            'label': 'CLOSED',
            'value': 4,
            'color': '#ADADAD',
            'className': 'uk-badge uk-badge-closed',
            'selectedClassName': 'md-btn md-btn-wave-light md-btn-block'
        },
    ];
    return (
        <div>
            <label className="uk-text-muted" style={{marginLeft: '51px'}}>Status</label>

            <div className="uk-input-group">
                <span className="uk-input-group-addon"><i className="material-icons">&#xE896;</i></span>
                {task.taskHasAssignedUsers.map((user, i) => {
                   return (<DropDown
                        key={i}
                        fieldName="status"
                        options={options}
                        customLabel = {user.user.username}
                        action={action}
                        taskId={task.id}
                        defaultValue={5}
                        additionalInfo={
                            {
                                'assigned': user.user.id
                            }
                        }
                    />
                   )
                })}
                {task.taskHasAssignedUsers.length === 0 &&
                    <DropDown
                        fieldName="status"
                        options={options}
                        action={action}
                        taskId={task.id}
                        defaultValue={5}
                        additionalInfo={
                            {'assigned': 'whatever'}
                        }
                    />
                }
            </div>
        </div>
    );
};

export default status;