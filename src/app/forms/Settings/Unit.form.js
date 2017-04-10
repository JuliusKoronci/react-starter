import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {renderField} from '../field.tpl';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router';
import {generateRoute} from '../../../config/router';

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
                        <div className="uk-width-medium-1-1 max-width-1000px">
                            <div className="uk-margin-bottom">
                                <Field type="checkbox" name="is_active" validate={[]} component={renderField}/>
                                <label className="uk_dp1 uk-text-muted">Active</label>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Unit name</label>
                                <Field type="text" name="title" validate={[]} component={renderField}/>
                            </div>
                            <div className="uk-margin-bottom">
                                <label>Shortcut</label>
                                <Field type="text" name="shortcut" validate={[]} component={renderField}/>
                            </div>
                            <div className="uk-margin-bottom">
                                <Link className="md-btn md-btn-danger" to={generateRoute('units')}>Cancel</Link>
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
    const unit = state.units.data.filter((unit) => parseInt(unit.id, 10) === parseInt(unitId, 10));

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
