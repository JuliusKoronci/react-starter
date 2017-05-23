import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {required} from '../../../config/validation';
import {renderField, renderColorpicker} from '../field.tpl';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {generateRoute} from '../../../config/router';


class TagForm extends Component {

    render() {
        const {handleSubmit,heading} = this.props;
        return (
            <div className="md-card">
                <form onSubmit={handleSubmit}>
                    <div className="md-card-content">
                        <div className="uk-margin-bottom" data-uk-margin>
                            <h1 className="heading_b uk-margin-bottom">{heading}</h1>
                        </div>
                        <hr/>
                        <div className="uk-width-medium-1-1 max-width-1000px">

                            { this.props.loggedUserAcl.indexOf('share_tags') !== -1 &&
                            <div className="uk-margin-bottom">
                                <Field type="checkbox" name="public" validate={[]} component={renderField}/>
                                <label className="uk_dp1 uk-text-muted">Public</label>
                            </div>}

                            <div className="uk-margin-bottom">
                                <label>Tag name</label>
                                <Field type="text" name="title" validate={[]} component={renderField}/>
                            </div>

                            <div className="uk-margin-bottom">

                                <Field name="color" type="text" validate={[required]} component={renderColorpicker}
                                       label="Color"/>

                            </div>

                            <div className="uk-margin-bottom">
                                <Link className="md-btn md-btn-danger" to={generateRoute('tags')}>Cancel</Link>
                                <button className="md-btn md-btn-primary alignright" href="settings_tags.html">Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const tagId = ownProps.params.tagId;
    const tag = state.tags.data.filter((tag) => parseInt(tag.id, 10) === parseInt(tagId, 10));

    if (tag.length > 0) {
        return {
            initialValues: tag.length > 0 ? tag[0] : {},
            loggedUserAcl:state.auth.user.userRoleAcl || []
        };
    }
    return {
        loggedUserAcl:state.auth.user.userRoleAcl || []
    };

}

TagForm = reduxForm({
    form: 'TagForm',
    enableReinitialize: true
})(TagForm);

export default connect(mapStateToProps)(TagForm);
