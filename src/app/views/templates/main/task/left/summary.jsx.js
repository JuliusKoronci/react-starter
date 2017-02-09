import React from 'react';
import RTE from '../../../../../forms/rte/RTE.form';
import Input from '../../../../../forms/Task/Input.form';

const summary = ({task, actions}) => {
    return (
        <div>
            <div className="uk-margin-medium-bottom">
                <RTE defaultValue={task.description} action={actions.taskUpdated} fieldName="description" label="Description" taskId={task.id} />
            </div>
            <div className="uk-margin-medium-bottom">
                <RTE defaultValue={task.work} action={actions.taskUpdated} fieldName="work" label="Work Done" taskId={task.id} />
            </div>
            <div className="uk-margin-medium-bottom">
                <label className="uk-text-muted">Add work time</label>
                <Input fieldName="work_time" className="header_b md-input" taskId={task.id} number={true}/>
            </div>
        </div>
    );
};

export default summary;