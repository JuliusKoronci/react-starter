import React from 'react';

const summary = ({task, form}) => {

    let val = form && form['work_time'] ? form['work_time'] : '';

    return (
        <div>
            <div className="uk-margin-medium-bottom">
                <p dangerouslySetInnerHTML={{__html: task.description}}/>
            </div>

            <div className="uk-margin-medium-bottom">
                <p dangerouslySetInnerHTML={{__html: task.work}}/>
            </div>

            <div className="uk-margin-medium-bottom">
                <label className="uk-text-muted">Add work time</label>
                <br />
                {val}
            </div>
        </div>
    );
};

export default summary;
