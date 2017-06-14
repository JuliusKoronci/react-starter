import React from 'react';

const summary = ({task, form}) => {

    let val = form && form['work_time'] ? form['work_time'] : '';

    return (
        <div>
            {/*
            <div className="uk-margin-medium-bottom">
                {<p dangerouslySetInnerHTML={{__html: task.description}}/>}
            </div>

            <div className="uk-margin-medium-bottom">
                <p dangerouslySetInnerHTML={{__html: task.work}}/>
            </div>
          */}


            <div className="uk-margin-medium-bottom">
              <label className="uk-text-muted">Description</label>
              <textarea
                readOnly
                fieldName="work_time"
                className="md-input"
                value={<p dangerouslySetInnerHTML={{__html: task.description}}/>}
                />
            </div>

            <div className="uk-margin-medium-bottom">
              <label className="uk-text-muted">Work done</label>
              <textarea
                readOnly
                fieldName="work_time"
                className="md-input"
                value={<p dangerouslySetInnerHTML={{__html: task.work}}/>}
                />
            </div>


            <div className="uk-margin-medium-bottom">
      				<label className="uk-text-muted">Add work time</label>
      				<input
                readOnly
                fieldName="work_time"
                className="md-input"
                value={val}
                />
      			</div>

        </div>
    );
};

export default summary;
