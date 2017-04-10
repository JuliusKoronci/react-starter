import React from 'react';

const taskButtonPanel = ({saveAction}) => {
    return (
        <div>
            <div className="md-btn-group">
                <a className="md-btn md-btn-danger md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
                   href="#">
                    <i className="uk-icon-trash"/>
                    DELETE
                </a>
                <a className="md-btn md-btn-warning md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
                   href="#">
                    <i className="uk-icon-ban"/>
                    CANCEL
                </a>

                <a className="md-btn md-btn-primary md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
                   href="#">
                    <i className="uk-icon-print"/>
                    Print
                </a>
                <a className="md-btn md-btn-primary md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
                   href="#">
                    <i className="uk-icon-star-half-empty"/>
                    Important
                </a>
            </div>

            <div className="alignright" style={{float: 'right'}}>
                <button onClick={saveAction.bind(null)} className="md-btn md-btn-primary md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light">
                    <i className="uk-icon-save"/>
                    SAVE
                </button>
            </div>
        </div>
    );
};



export default taskButtonPanel;