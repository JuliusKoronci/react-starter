import React, {PropTypes} from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {renderField} from '../field.tpl';
import {Field, reduxForm} from 'redux-form';

class UnitForm extends Component {

    render() {
        const {handleSubmit} = this.props;
        return (
            <div className="md-card">
                <form onSubmit={handleSubmit}>
                    <div className="md-card-content">
                        <div className="uk-margin-bottom" data-uk-margin>
                            <h1 className="heading_b uk-margin-bottom">Add unit</h1>
                        </div>
                        <hr/>
                        <div className="uk-width-medium-1-2">
                            <div className="uk-margin-bottom">
                                <Field type="checkbox" name="active" validate={[]} component={renderField}/>
                                <label className="uk_dp1 uk-text-muted">Active</label>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Unit name</label>
                                <Field type="text" name="title" validate={[]} component={renderField}/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Description</label>
                                <Field type="text" name="shortcut" validate={[]} component={renderField}/>
                            </div>
                            <div className="uk-margin-bottom">
                                <a className="md-btn md-btn-danger" href="#">Delete</a>
                                <button className="md-btn md-btn-primary alignright" href="settings_units.html">Save</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const unitId = ownProps.params.unitId;
    const unit = state.imaps.data.filter((unit) => parseInt(unit.id, 10) === parseInt(unitId, 10));

    if (unit.length > 0) {
        return {
            initialValues: unit.length > 0 ? unit[0] : {},
        };
    }
    return {};

}

UnitForm = reduxForm({
    form: 'UnitForm'
})(UnitForm);

export default connect(mapStateToProps)(UnitForm);
