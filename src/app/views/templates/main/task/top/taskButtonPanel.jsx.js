import React from 'react';

const taskButtonPanel = ({saveAction, form, formInputChangeHandler, deleteButton}) => {

    return (
        <div>
            <div className="md-btn-group">


                { deleteButton &&
                <a className="md-btn md-btn-danger md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
                   href="#">
                    <i className="uk-icon-ban"/>
                    DELETE
                </a>
                }

                <a className="md-btn md-btn-warning md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
                   href="#">
                    <i className="uk-icon-ban"/>
                    CANCEL
                </a>


                {formInputChangeHandler && <a className="md-btn md-btn-primary md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
                   href="#">
                    <i className="uk-icon-print"/>
                    Print
                </a>}

                {formInputChangeHandler && <button onClick={formInputChangeHandler.bind(null,'important',!form.important)} className={"md-btn md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light "+ (form.important?'md-btn-primary':'md-btn-default') }
                   href="#">
                    <i className="uk-icon-star-half-empty"/>
                    Important
                </button> }

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