import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required, phone, alphanum, number} from '../../../config/validation';
import {renderField, renderSelect} from '../field.tpl';
import DeleteButton from '../../components/Main/_partials/DeleteButton';
import {Link} from 'react-router';
import {generateRoute} from '../../../config/router';

class ImapForm extends Component {



    // componentDidUpdate(){
    //     console.log(this.props.company);
    // }


    render() {
        const {handleSubmit, formError, handleDelete, heading, editing} = this.props;
        return (

            <div className="md-card">
                <form onSubmit={handleSubmit}>
                    <div className="md-card-content">
                        <div className="uk-margin-bottom" data-uk-margin>
                            <h1 className="heading_b uk-margin-bottom">{heading}</h1>
                        </div>
                        <hr/>
                        <div className="uk-width-medium-1-1 max-width-1000px">

                            <div className="uk-margin-bottom">
                                <Field name="inbox_email" type="text" validate={[required]} component={renderField}
                                       label="Inbox email"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="move_email" type="text" validate={[required]} component={renderField}
                                        label="Folder for processed mails"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="host" type="text" validate={[required]} component={renderField} label="Host"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="port" type="text" validate={[required]} component={renderField} label="Port"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="name" type="text" validate={[required]} component={renderField} label="Login"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="password" type="text" validate={[required]} component={renderField} label="Password"/>
                            </div>
                            <div className="uk-margin-bottom">

                                <Field name="project.id" validate={[required]} component={renderSelect} label="Project folder"
                                       className="md-input label-fixed" options={this.props.projects.map((project, i) => {return({id:project.id,title:project.title})})} />

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
                                <Link className="md-btn md-btn-danger" to={generateRoute('imaps')}>Cancel</Link>
                                {editing && this.props.imap.id&& <DeleteButton handleDelete={handleDelete} id={this.props.imap.id} />}
                                <button className="md-btn md-btn-primary alignright" href="settings_units.html">Save</button>
                                <a className="md-btn md-btn-success " href="settings_units.html">Test connection</a>
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

