import React from 'react';
import Flatpickr from 'react-flatpickr';

const startDate = ({task, actions}) => {
    return (
        <div className="uk-input-group" style={{marginTop: '20px'}}>
            <span className="uk-input-group-addon"><i className="material-icons">&#xE858;</i></span>
            <label className="uk-text-muted" htmlFor="uk_dp_1">Start at</label>
            <Flatpickr className="md-input" data-enable-time
                       onChange={(v) => {
                           actions.taskUpdated(
                               {
                                   'startedAt': v[0]
                               },
                               task.id
                           )
                       }}/>
        </div>
    );
};
export default startDate;