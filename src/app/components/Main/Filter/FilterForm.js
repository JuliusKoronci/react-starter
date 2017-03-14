import React, {Component} from 'react';
import {Link} from 'react-router';
import {Creatable} from 'react-select';
import Select from 'react-select';
import ColumnVisible from '../../../views/templates/main/filter/columnVisible.jsx';

import {Field, change, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required, phone, alphanum, number} from '../../../../config/validation';
import {renderField, renderTagger, renderMultiselect, renderDatepicker} from '../../../forms/field.tpl';
import DeleteButton from '../../../components/Main/_partials/DeleteButton';
import {generateRoute} from '../../../../config/router';


class FilterForm extends Component {



    changeRowVisibility=(e)=>{

        //alert('in form '+v)
        // let name=v;
        let checked=!!e.target.checked;
        let name=e.target.name;
        this.props.dispatch(change('filterForm', name, checked));
        // e.target.onChange(true);
        //this.props.input.onChange(newValue);

    };



    render() {

        const {handleSubmit, formError, handleDelete, columns, filterOptions} = this.props;

        // console.log('columns', columns);

        // { Object.keys(props.columns).map((key, i)=>{
        //     let name=key;
        //     if(props.columns.hasOwnProperty(name)&& typeof props.columns[name] !== 'undefined' && (!!props.columns[name].visible)) {
        //         return <th key={i}>{props.columns[name].label}</th>;
        //     }
        // })
        // }

        return (
            <form onSubmit={handleSubmit} className={this.props.filterFormVisible ? "uk-width-medium-1-4" : 'hidden'}
                  id="filterDiv">

                <a className="md-btn md-btn-danger md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                   href="javascript:void(0)">CLEAR</a>
                <a className="md-btn md-btn-success md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                   href="javascript:void(0)">SAVE</a>
                <button type="submit"
                        className="md-btn md-btn-primary md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                        href="javascript:void(0)">FILTER
                </button>


                <ul className="md-list md-list-addon">


                    <Field name="filter_name" type="text" validate={[]} component={renderField} label="Filter Name"/>


                    <Field name="columns.title" type="checkbox" className="alignright" validate={[]}
                           component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />
                    <Field name="title" type="text" validate={[]} component={renderField} label="Task Name"/>




                    <Field name="columns.status" type="checkbox" className="alignright" validate={[]}
                           component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />
                    <Field name="status" type="text" validate={[]} component={renderMultiselect} label="Status" defaultOptions={
                            filterOptions.status.map((option)=>{
                                return {value:option.id, label:option.title}
                            })
                    } />


                    <Field name="columns.project" type="checkbox" className="alignright" validate={[]}
                           component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}}/>
                    <Field name="project" type="text" validate={[]} component={renderMultiselect} label="Project" defaultOptions={
                        filterOptions.project.map((option)=>{
                            return {value:option.id, label:option.title}
                        })
                    } />



                    <Field name="columns.created" type="checkbox" className="alignright" validate={[]}
                           component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />
                    <Field name="creator" type="text" validate={[]} component={renderMultiselect} label="Created" defaultOptions={
                        filterOptions.created.map((option)=>{
                            return {value:option.id, label:option.username}
                        })
                    } />



                    <Field name="columns.requester" type="checkbox" className="alignright" validate={[]}
                           component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />
                    <Field name="requester" type="text" validate={[]} component={renderMultiselect} label="Requester" defaultOptions={
                        filterOptions.requester.map((option)=>{
                            return {value:option.id, label:option.username}
                        })
                    } />



                    <Field name="columns.company" type="checkbox" className="alignright" validate={[]}
                           component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />
                    <Field name="company" type="text" validate={[]} component={renderMultiselect} label="Company" defaultOptions={
                        filterOptions.company.map((option)=>{
                            return {value:option.id, label:option.title}
                        })
                    } />



                    <Field name="columns.assigned" type="checkbox" className="alignright" validate={[]}
                           component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />
                    <Field name="assigned" type="text" validate={[]} component={renderMultiselect} label="Assigned" defaultOptions={
                        filterOptions.assigned.map((option)=>{
                            return {value:option.id, label:option.username}
                        })
                    } />


                    <Field name="columns.context" type="checkbox" className="alignright" validate={[]}
                           component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />
                    <Field name="context" type="text" validate={[]} component={renderMultiselect} label="Context" defaultOptions={
                        filterOptions.tag.map((option)=>{
                            return {value:option.id, label:option.title}
                        })
                    } />






                    <div className="uk-grid" data-uk-grid-margin>
                        <div className="uk-width-medium-1-2">
                            <Field name="created" type="text" validate={[]} component={renderDatepicker} label="Created from:" />
                        </div>

                        <div className="uk-width-medium-1-2">

                            <Field name="created" type="text" validate={[]} component={renderDatepicker} label="To:" />

                            <Field name="columns.created" type="checkbox" className="alignright" validate={[]}
                                   component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />

                        </div>
                    </div>







                    <hr/>
                    <p className="uk-text-muted">Started at</p>
                    <p>
                        <input type="radio" name="radio_demo" id="radio_demo_1" data-md-icheck/>
                        <label htmlFor="radio_demo_1" className="inline-label">Overdue</label>
                    </p>
                    <p>
                        <input type="radio" name="radio_demo" id="radio_demo_2" data-md-icheck/>
                        <label htmlFor="radio_demo_2" className="inline-label">Time range</label>
                    </p>




                    <div className="uk-grid" data-uk-grid-margin>
                        <div className="uk-width-medium-1-2">

                            <Field name="" type="text" validate={[]} component={renderDatepicker} label="From:" />

                        </div>
                        <div className="uk-width-medium-1-2">

                            <Field name="" type="text" validate={[]} component={renderDatepicker} label="To:" />

                            <ColumnVisible toggleRowVisibility={this.props.toggleRowVisibility} name="started"
                                           columns={this.props.columns} className="alignright"/>


                        </div>
                    </div>
                    <hr/>


                    <p className="uk-text-muted">Deadline at</p>
                    <p>
                        <input type="radio" name="radio_demo" id="radio_demo_1" data-md-icheck/>
                        <label htmlFor="radio_demo_1" className="inline-label">Overdue</label>
                    </p>
                    <p>
                        <input type="radio" name="radio_demo" id="radio_demo_2" data-md-icheck/>
                        <label htmlFor="radio_demo_2" className="inline-label">Time range</label>
                    </p>

                    <div className="uk-grid" data-uk-grid-margin>
                        <div className="uk-width-medium-1-2">

                            <Field name="" type="text" validate={[]} component={renderDatepicker} label="From:" />

                        </div>
                        <div className="uk-width-medium-1-2">

                            <Field name="" type="text" validate={[]} component={renderDatepicker} label="To:" />


                            <ColumnVisible toggleRowVisibility={this.props.toggleRowVisibility} name="deadline"
                                           columns={this.props.columns} className="alignright"/>


                        </div>
                    </div>
                    <hr/>


                    <div className="uk-grid" data-uk-grid-margin>
                        <div className="uk-width-medium-1-2">

                            <Field name="" type="text" validate={[]} component={renderDatepicker} label="Closed from:" />

                        </div>
                        <div className="uk-width-medium-1-2">

                            <Field name="" type="text" validate={[]} component={renderDatepicker} label="To:" />


                            <ColumnVisible toggleRowVisibility={this.props.toggleRowVisibility} name="deadline_closed"
                                           columns={this.props.columns} className="alignright"/>

                        </div>
                    </div>
                    <hr/>


                    {/*<input type="checkbox" name="checkbox_demo_mercury" id="checkbox_demo_1" data-md-icheck/>*/}
                    {/*<label htmlFor="checkbox_demo_1" className="inline-label">Archived</label>*/}

                    {/*<hr/>*/}

                    {/*<label className="uk_dp_1 uk-text-muted">Custom select 1</label>*/}


                    {/*<ColumnVisible toggleRowVisibility={this.props.toggleRowVisibility} name="custom"*/}
                    {/*columns={this.props.columns} className="alignright" />*/}


                    {/*<Creatable name="Project"*/}
                    {/*className="md-input"*/}
                    {/*joinValues={true}*/}
                    {/*multi={true}*/}
                    {/*options={[*/}
                    {/*{*/}
                    {/*value: 'Projekty ku ktorym ma pouzivatel pristup',*/}
                    {/*label: 'Projekty ku ktorym ma pouzivatel pristup'*/}
                    {/*},*/}
                    {/*]} />*/}


                    {/*<label className="uk_dp_1 uk-text-muted">Custom input/text area</label>*/}
                    {/*<span className="alignright">*/}
                    {/*<label className="uk_dp1 uk-text-muted">Column</label>*/}
                    {/*<input type="checkbox" name="checkbox_demo_inline_mercury"*/}
                    {/*id="checkbox_demo_inline_1" data-md-icheck/>*/}
                    {/*</span>*/}
                    {/*<input type="text" className="md-input"/>*/}


                </ul>


            </form>
        );
    }
}


function mapStateToProps(state, ownProps) {
    const filterId = ownProps.params.filterId;
    const filter = state.filter.filter((filter) => parseInt(filter.id, 10) === parseInt(filterId, 10));

    // if (filter.length > 0) {
    //     return {
    //         initialValues: filter[0]
    //     };
    // }else {
    //     return{};
    // }

    let columns={};
    if(ownProps.columns){
        columns=ownProps.columns;
        // console.log('own props: ',ownProps.columns);
    }

    // return {initialValues: {
    //     columns:columns,
    // },
    //     enableReinitialize: true
    // };


    if (filter.length > 0) {
        return {
            initialValues: {...filter[0]},enableReinitialize: true
        };
    }else {
        return{};
    }


}

FilterForm = reduxForm({
    form: 'filterForm'
})(FilterForm);

export default connect(mapStateToProps)(FilterForm);


// export default FilterForm;
