import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required, phone, alphanum, number} from '../../../config/validation';
import {renderField, renderSelect} from '../field.tpl';
import DeleteButton from '../../components/Main/_partials/DeleteButton';

class RoleForm extends Component {



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
                        <div className="uk-width-medium-1-2">
                            <div className="uk-margin-bottom">
                                <Field name="is_active" type="checkbox" validate={[]} component={renderField}
                                   label="Active"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="order" type="text" validate={[required]} component={renderField} label="Order"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="title" type="text" validate={[required]} component={renderField} label="Role Name"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="homepage" type="text" validate={[required]} component={renderField} label="Homepage"/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Field name="description" type="text" validate={[required]} component={renderField} label="Description"/>
                            </div>

                            <div className="uk-margin-bottom">
                                <Field name="ACL" type="text" validate={[required]} component={renderField} label="ACL"/>
                            </div>


                            <div className="uk-margin-bottom">
                                {editing && this.props.role.id&& <DeleteButton handleDelete={handleDelete} id={this.props.role.id} />}
                                <button className="md-btn md-btn-primary alignright" type="submit">
                                    SAVE
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


        );
    }
}


function mapStateToProps(state, ownProps) {
    const roleId = ownProps.params.roleId;
    const role = state.roles.data.filter((role) => parseInt(role.id, 10) === parseInt(roleId, 10));

    if (role.length > 0) {
        return {
            initialValues: role.length > 0 ? role[0] : {},
        };
    }
    return {};

}

RoleForm = reduxForm({
    form: 'roleForm'
})(RoleForm);

export default connect(mapStateToProps)(RoleForm);

