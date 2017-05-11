import React from 'react';
import {LOAD_ATTACHMENT} from '../../../../../../api/urls';

const attachment = ({task, handleFileDownload}) => {
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
            <hr className="attachment-divide-top"/>
            {attachments.map((at, i) => {
                return (
                    <div className="attachment-download" key={at.slug}>
                        <a href="#" onClick={handleFileDownload.bind(null,at.slug)}><i className="material-icons">&#xE226;</i>&nbsp;{at.slug}</a>
                        <hr className="attachment-divide"/>
                    </div>
                );
            })}
        </div>
    );
};

export default attachment;