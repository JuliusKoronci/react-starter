import React from 'react';

const summary = ({task, form}) => {

    let val = form && form['work_time'] ? form['work_time'] : '';


    return (
        <div>

            <div className="uk-margin-medium-bottom">
              <label className="uk-text-muted">Description</label>
              <div
                  style=
                    {{border:'1px',
                      borderRadius: '0',
                      borderStyle:'solid',
                      padding:'4px 8px 4px 8px',
                      borderColor:'rgba(0, 0, 0, 0.12)'
                     }}>
                {<p dangerouslySetInnerHTML={{__html: task.description}}/>}
              </div>
            </div>

            <div className="uk-margin-medium-bottom">
              <label className="uk-text-muted">Work done</label>
              <div
                  style=
                    {{border:'1px',
                      borderRadius: '0',
                      borderStyle:'solid',
                      padding:'4px 8px 4px 8px',
                      borderColor:'rgba(0, 0, 0, 0.12)'
                     }}>
                <p dangerouslySetInnerHTML={{__html: task.work}}/>
              </div>
            </div>





            <div className="uk-margin-medium-bottom">
      				<label className="uk-text-muted">Add work time</label>
      				<input
                readOnly
                className="md-input"
                value={val}
                />
      			</div>

        </div>
    );
};

export default summary;
