import React from 'react';
import Dropzone from 'react-dropzone';

const attachment = () => {
    return (
        <div className="uk-input-group" style={{marginTop: '20px'}}>
            <span className="uk-input-group-addon"><i className="material-icons">&#xE226;</i></span>
            <label className="uk-text-muted">Attachment</label>

            <Dropzone style={{
                width: '100%',
                height: 'auto',
                background: '#009688',
                color: 'white',
                cursor:'pointer'
            }} onDrop={(a, r) => {
                console.log(a, r)
            }}>
                <a style={{
                    padding:'10px',
                    cursor: 'pointer',
                    color: 'white',
                    display: 'block'
                }}>Try dropping some files here, or click to select files to upload.</a>
            </Dropzone>
            <div id="file_upload-progressbar" className="uk-progress">
                <div className="uk-progress-bar" style={{width: '20%'}}>20%</div>
            </div>
        </div>
    );
};

export default attachment;