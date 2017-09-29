import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required} from '../../../config/validation';
import {renderField, renderColorpicker} from '../field.tpl';
import DeleteButton from '../../components/Main/_partials/DeleteButton';
import {Link} from 'react-router';
import {generateRoute} from '../../../config/router';

class StatusForm extends Component {



    // componentDidUpdate(){
    //     console.log(this.props.company);
    // }


    render() {
        // const {handleSubmit, formError, handleDelete, colorpickerOnDrag, colorpickerColor} = this.props;
        const {handleSubmit, handleDelete} = this.props;
        return (

            <div className="md-card">
                <div className="md-card-content">
                    <div className="uk-margin-bottom" data-uk-margin>
                        <h1 className="heading_b uk-margin-bottom">{this.props.heading}</h1>
                    </div>
                    <hr/>
                    <form onSubmit={handleSubmit}>
                    <div className="uk-width-medium-1-1 max-width-1000px">

                        <div className="uk-margin-bottom">
                            <Field name="is_active" type="checkbox" validate={[]} component={renderField}
                                   label="Active"/>
                        </div>

                        <div className="uk-margin-bottom">
                            <Field name="title" type="text" validate={[required]} component={renderField}
                                   label="Status name"/>
                        </div>

                        <div className="uk-margin-bottom">
                            <Field name="description" type="text" validate={[required]} component={renderField}
                                   label="Description"/>
                        </div>

                        <div className="uk-margin-bottom">

                            <Field name="color" type="text" validate={[required]} component={renderColorpicker}
                            label="Color"/>

                        </div>


                        <div className="uk-margin-bottom">
                            <Field name="order" type="text" validate={[required]} component={renderField}
                                   label="Order"/>
                        </div>


                        <div className="uk-margin-bottom">
                            <Link className="md-btn md-btn-danger" to={generateRoute('statuses')}>Cancel</Link>
                            {this.props.params.statusId && <DeleteButton handleDelete={handleDelete}
                                                                          id={parseInt(this.props.params.statusId, 10)}/>}
                            <button className="md-btn md-btn-primary alignright" type="submit">
                                SAVE
                            </button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>


        );
    }
}


function mapStateToProps(state, ownProps) {
    const statusId = ownProps.params.statusId;
    const status = state.statuses.data.filter((status) => parseInt(status.id, 10) === parseInt(statusId, 10));

    if (status.length > 0) {
        return {
            initialValues: status.length > 0 ? status[0] : {},
            enableReinitialize: true
        };
    }

    return {initialValues:{is_active:true},enableReinitialize: true};

}

StatusForm = reduxForm({
    form: 'statusForm'
})(StatusForm);

export default connect(mapStateToProps)(StatusForm);

