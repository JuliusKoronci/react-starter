import React from 'react';
import Dropzone from 'react-dropzone';
import {LOAD_ATTACHMENT} from '../../../../../../api/urls';

const attachment = ({task, handleFileUpload, handleFileDownload, handleFileDelete}) => {
    let attachments = [];
    if (task.taskHasAttachments) {
        attachments = task.taskHasAttachments.map(attachment => {
            return {
                url: LOAD_ATTACHMENT + '/' + attachment.slug,
                slug: attachment.slug
            };
        });
    }
    return (
        <div className="uk-input-group" style={{marginTop: '20px'}}>
            <span className="uk-input-group-addon"><i className="material-icons">&#xE226;</i></span>
            <label className="uk-text-muted">Attachment</label>
            <Dropzone style={{
                width: '100%',
                height: 'auto',
                background: '#009688',
                color: 'white',
                cursor: 'pointer'
            }} onDrop={handleFileUpload}>
                <a style={{
                    padding: '10px',
                    cursor: 'pointer',
                    color: 'white',
                    display: 'block'
                }}>Try dropping some files here, or click to select files to upload.</a>
            </Dropzone>
            <hr className="attachment-divide-top"/>
            {attachments.map((at, i) => {
                return (
                    <div className="attachment-download" key={i}>

                        <a href="#" onClick={handleFileDownload.bind(null,at.slug)}><i className="material-icons">&#xE226;</i>&nbsp;{at.slug}</a>
                        <a className="attachment-remove" href="#" onClick={handleFileDelete.bind(null,at.slug)} ><i className="material-icons">&#xE5CD;</i></a>
                        <hr className="attachment-divide"/>
                    </div>
                );
            })}
        </div>
    );
};

export default attachment;