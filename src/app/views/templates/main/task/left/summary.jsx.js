import React from 'react';
import RTE from '../../../../../forms/rte/RTE.form';

const summary = ({task, actions}) => {
    return (
        <div>
            <div className="uk-margin-medium-bottom">
                <RTE defaultValue={task.description} action={actions.taskUpdated} fieldName="description" label="Description" taskId={task.id} />
            </div>
            <div className="uk-margin-medium-bottom">
                <label className="uk-text-muted">Work done</label>
                <textarea cols="30" rows="0" id="border-full" className="md-input"
                          placeholder=""/>
            </div>
            <div className="uk-margin-medium-bottom">
                <label className="uk-text-muted">Add work time</label>
                <input type="text" className="md-input"/>
            </div>
        </div>
    );
};

export default summary;