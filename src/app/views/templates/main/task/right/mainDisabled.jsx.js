import React from 'react';


const main = () => {

    return (
        <div className="md-list md-list-addon">


            <div>
                <label className="uk-text-muted" style={{marginLeft: '51px'}}>Status</label>

                <div className="uk-input-group">
                    <span className="uk-input-group-addon"><i className="material-icons">&#xE896;</i></span>
                    <input disabled={true} className={'md-input'} />
                </div>
            </div>



            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE2C8;</i></span>
                <label className="uk-text-muted">Project</label>
                <input disabled={true} className={'md-input'} />
            </div>

            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE7FD;</i></span>
                <label className="uk-text-muted">Requester</label>
                <input disabled={true} className={'md-input'} />
            </div>

            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE7EE;</i></span>
                <label className="uk-text-muted">Company</label>
                <input disabled={true} className={'md-input'} />
            </div>

            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE7FE;</i></span>
                <label className="uk-text-muted">Assigned</label>
                <input disabled={true} className={'md-input'} />
            </div>


            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE858;</i></span>
                <label className="uk-text-muted" htmlFor="uk_dp_1">Start At</label>
                <input disabled={true} className={'md-input'} />
            </div>

            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE8B2;</i></span>
                <label className="uk-text-muted" htmlFor="uk_dp_1">Deadline</label>
                <input disabled={true} className={'md-input'} />
            </div>

            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE5CD;</i></span>
                <label className="uk-text-muted" htmlFor="uk_dp_1">Closed At</label>
                <input disabled={true} className={'md-input'} />
            </div>


            <div className="uk-input-group" style={{marginTop: '20px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE226;</i></span>
                <label className="uk-text-muted">Attachment</label>

                <input disabled={true} style={{
                    width: '100%',
                    height: 'auto',
                    background: '#009688',
                    color: 'white',
                    cursor: 'pointer'
                }} className={'md-input'}  />
                <hr className="attachment-divide-top"/>
            </div>


            <div className="uk-input-group" style={{marginTop: '10px'}}>
                <span className="uk-input-group-addon"><i className="material-icons">&#xE893;</i></span>
                <label className="uk-text-muted">Tag</label>
                <input disabled={true} className={'md-input'} />
            </div>

        </div>
    );
};

export default main;