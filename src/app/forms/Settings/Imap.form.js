import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required, phone, alphanum, number} from '../../../config/validation';
import {renderField} from '../field.tpl';
import DeleteButton from '../../components/Main/_partials/DeleteButton';

class ImapForm extends Component {



    // componentDidUpdate(){
    //     console.log(this.props.company);
    // }


    render() {
        const {handleSubmit, formError, handleDelete, heading} = this.props;
        return (

            <div className="md-card">
                <form onSubmit={handleSubmit}>
                    <div className="md-card-content">
                        <div className="uk-margin-bottom" data-uk-margin>
                            <h1 className="heading_b uk-margin-bottom">{heading}</h1>
                        </div>
                        <hr/>
                        <div className="uk-width-medium-1-2">
                            <div className="uk-margin-bottom">
                                <Field type="checkbox" name="active" validate={[]} component={renderField}
                                        label="Active"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="inbox_email" type="text" validate={[required]} component={renderField}
                                       label="Inbox email"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="move_email" type="text" validate={[required]} component={renderField}
                                        label="Move email"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="host" type="text" validate={[required]} component={renderField} label="Host"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="port" type="text" validate={[required]} component={renderField} label="Port"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="login" type="text" validate={[required]} component={renderField} label="Login"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="password" type="text" validate={[required]} component={renderField} label="Password"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Project folder</label>
                                <select className="md-input label-fixed">
                                    {this.props.projects.map((p,i)=>{
                                        return (
                                            <option key={i} value={p.key}>{p.title}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field type="checkbox" name="ignore_certificate" validate={[]} component={renderField}/>
                                <label className="uk_dp1 uk-text-muted">Ignore certificate</label>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field type="checkbox" name="ssl" validate={[]} component={renderField}/>
                                <label className="uk_dp1 uk-text-muted">SSL</label>
                            </div>
                            <div className="uk-margin-bottom">
                                <a className="md-btn md-btn-danger" href="#">Delete</a>
                                <button className="md-btn md-btn-primary alignright" href="settings_units.html">Save</button>
                                <a className="md-btn md-btn-success alignright" href="settings_units.html">Test connection</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


        );
    }
}


function mapStateToProps(state, ownProps) {
    const imapId = ownProps.params.imapId;
    const imap = state.imaps.data.filter((imap) => parseInt(imap.id, 10) === parseInt(imapId, 10));

    if (imap.length > 0) {
        return {
            initialValues: imap.length > 0 ? imap[0] : {},
        };
    }
    return {};

}

ImapForm = reduxForm({
    form: 'imapForm'
})(ImapForm);

export default connect(mapStateToProps)(ImapForm);

