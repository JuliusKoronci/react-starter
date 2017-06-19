import React from 'react';
import {Link, browserHistory} from 'react-router';

const taskButtonPanel = ({form, formInputChangeHandler}) => {

    return (
        <div>
            <div className="md-btn-group">
                <Link className="md-btn md-btn-warning md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light" to={'/'} onClick={browserHistory.goBack} ><i className="uk-icon-ban"/> Cancel</Link>


                {formInputChangeHandler && <a className="md-btn md-btn-primary md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light"
                   href="#">
                    <i className="uk-icon-print"/>
                    Print
                </a>}

                <button className={"md-btn md-btn-small md-btn-wave-light md-btn-icon waves-effect waves-button waves-light "+ (form.important?'md-btn-primary':'md-btn-default') }
                   href="#">
                    <i className="uk-icon-star-half-empty"/>
                    Important
                </button>

            </div>
        </div>
    );
};



export default taskButtonPanel;