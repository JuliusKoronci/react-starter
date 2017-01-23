import React from 'react';

const attachment = () => {
    return (
        <div  className="uk-input-group" style={{marginTop: '20px'}}>
            <span className="uk-input-group-addon"><i className="material-icons">&#xE226;</i></span>
            <label className="uk-text-muted">Attachment</label>
            <div id="file_upload-drop" style={{background: '#009688', padding: '10px', color: 'white'}}>
                <p style={{marginBottom: '0px'}}>
                    Try dropping some files here, or click to select files to upload.
                </p>
            </div>
            <div id="file_upload-progressbar" className="uk-progress">
                <div className="uk-progress-bar" style={{width: '20%'}}>20%</div>
            </div>
        </div>
    );
};

export default attachment;