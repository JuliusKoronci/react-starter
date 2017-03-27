import React, {Component} from 'react';
import {Link} from 'react-router';
import {Creatable} from 'react-select';
import Select from 'react-select';
import ColumnVisible from '../../../views/templates/main/filter/columnVisible.jsx';
import {convertApiStringToDate} from '../../../services/general';

import {Field, change, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {required, phone, alphanum, number} from '../../../../config/validation';
import {renderField, renderTagger, renderMultiselect, renderDatepicker} from '../../../forms/field.tpl';
import DeleteButton from '../../../components/Main/_partials/DeleteButton';
import {generateRoute} from '../../../../config/router';


class FilterForm extends Component {



    changeRowVisibility=(e)=>{

        let checked=!!e.target.checked;
        let name=e.target.name;
        this.props.dispatch(change('filterForm', name, checked));
        // e.target.onChange(true);
        //this.props.input.onChange(newValue);

    };


    render() {
        const {handleSubmit, formError, handleDelete, columns, filterOptions, getFilterTasks, saveFilter} = this.props;
        let visibleColumns=columns.map((column)=>{
            let key = Object.keys(column)[0];
            if(column.hasOwnProperty(key) &&  typeof column[key] !== 'undefined' && (!!column[key]) ){
                return key;
            }
        }).filter((el)=>{return el!== undefined;});


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

                <button className="md-btn md-btn-success md-btn-small md-btn-wave-light waves-effect waves-button waves-light" type="submit"
                        onClick={saveFilter.bind(null)}>SAVE</button>
                <button type="submit"
                        className="md-btn md-btn-primary md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                        onClick={getFilterTasks.bind(null)} >FILTER</button>


                <ul className="md-list md-list-addon">


                    <Field name="title" type="text" validate={[]} component={renderField} label="Filter Name"/>


                    <Field name="columns.title" type="checkbox" className="alignright" validate={[]}
                           component={renderField} label="Column" defaultChecked={true} actions={{onChange:this.changeRowVisibility.bind(null)}} />
                    <Field name="search" type="text" validate={[]} component={renderField} label="Task Name"/>




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



                    <Field name="columns.creator" type="checkbox" className="alignright" validate={[]}
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


                    <Field name="columns.tag" type="checkbox" className="alignright" validate={[]}
                           component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />
                    <Field name="tag" type="text" validate={[]} component={renderMultiselect} label="Context" defaultOptions={
                        filterOptions.tag.map((option)=>{
                            return {value:option.id, label:option.title}
                        })
                    } />






                    <p className="uk-text-muted">Created at</p>


                        <Field type="radio" name="createdTime.radio" value="now" data-md-icheck component={renderField} />
                        <label className="inline-label">Overdue</label>

                        <Field type="radio" name="createdTime.radio" value="timeRange" data-md-icheck component={renderField} />
                        <label className="inline-label">Time range</label>


                    <div className="uk-grid" data-uk-grid-margin>
                        <div className="uk-width-medium-1-2">
                            <Field name="createdTime.from" type="text" validate={[]} component={renderDatepicker} label="Created from:" />
                        </div>

                        <div className="uk-width-medium-1-2">

                            <Field name="createdTime.to" type="text" validate={[]} component={renderDatepicker} label="To:" />



                            <Field name="columns.created" type="checkbox" className="alignright" validate={[]}
                                   component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />

                        </div>
                    </div>







                    <hr/>
                    <p className="uk-text-muted">Started at</p>

                    <Field type="radio" name="startedTime.radio" value="now" data-md-icheck component={renderField} />
                    <label className="inline-label">Overdue</label>

                    <Field type="radio" name="startedTime.radio" value="timeRange" data-md-icheck component={renderField} />
                    <label className="inline-label">Time range</label>





                    <div className="uk-grid" data-uk-grid-margin>
                        <div className="uk-width-medium-1-2">

                            <Field name="startedTime.from" type="text" validate={[]} component={renderDatepicker} label="From:" />

                        </div>
                        <div className="uk-width-medium-1-2">

                            <Field name="startedTime.to" type="text" validate={[]} component={renderDatepicker} label="To:" />

                            <Field name="columns.started" type="checkbox" className="alignright" validate={[]}
                                   component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />


                        </div>
                    </div>
                    <hr/>





                    <p className="uk-text-muted">Deadline at</p>

                    <Field type="radio" name="deadlineTime.radio" value="now" data-md-icheck component={renderField} />
                    <label className="inline-label">Overdue</label>

                    <Field type="radio" name="deadlineTime.radio" value="timeRange" data-md-icheck component={renderField} />
                    <label className="inline-label">Time range</label>



                    <div className="uk-grid" data-uk-grid-margin>
                        <div className="uk-width-medium-1-2">

                            <Field name="deadlineTime.from" type="text" validate={[]} component={renderDatepicker} label="From:" />

                        </div>
                        <div className="uk-width-medium-1-2">

                            <Field name="deadlineTime.to" type="text" validate={[]} component={renderDatepicker} label="To:" />


                            <Field name="columns.deadline" type="checkbox" className="alignright" validate={[]}
                                   component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />


                        </div>
                    </div>
                    <hr/>


                    <p className="uk-text-muted">Closed at</p>

                    <Field type="radio" name="closedTime.radio" value="now" data-md-icheck component={renderField} />
                    <label className="inline-label">Overdue</label>

                    <Field type="radio" name="closedTime.radio" value="timeRange" data-md-icheck component={renderField} />
                    <label className="inline-label">Time range</label>


                    <div className="uk-grid" data-uk-grid-margin>
                        <div className="uk-width-medium-1-2">

                            <Field name="closedTime.from" type="text" validate={[]} component={renderDatepicker} label="Closed from:" />

                        </div>
                        <div className="uk-width-medium-1-2">

                            <Field name="closedTime.to" type="text" validate={[]} component={renderDatepicker} label="To:" />


                            <Field name="columns.closed" type="checkbox" className="alignright" validate={[]}
                                   component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />
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


    let visibleColumns=ownProps.columns.map((column)=>{
        let key = Object.keys(column)[0];
        if(column.hasOwnProperty(key) &&  typeof column[key] !== 'undefined' && (!!column[key]) ){
            return key;
        }
    }).filter((el)=>{return el!== undefined;});
    // console.log(visibleColumns);

    let columns={};

    visibleColumns.map((vColumn)=>{
       columns[vColumn]=true;
    });



    // if (filter.length > 0) {
    //     return {
    //         initialValues: filter[0]
    //     };
    // }else {
    //     return{};
    // }

    // let columns={};
    // if(ownProps.columns){
    //     columns=ownProps.columns;
    //     // console.log('own props: ',ownProps.columns);
    // }

    // return {initialValues: {
    //     columns:columns,
    // },
    //     enableReinitialize: true
    // };

    // console.log(columns);



    let initialValues={filter:{}};

    // console.log(filter[0])
    if (filter.length > 0) {
        //visible columns
        let columns={};
        filter[0].columns.map((column)=>{ columns[column]=true });

        let statuses=filter[0].filter.status;//.split(',');
        let projects=filter[0].filter.project;
        let requester=filter[0].filter.requester;
        let company=filter[0].filter.company;
        let creator=filter[0].filter.creator;
        let assigned=filter[0].filter.assigned;
        let tag=filter[0].filter.tag;
        let search=filter[0].filter.search;

        let createdTime=filter[0].filter.createdTime;
        let startedTime=filter[0].filter.startedTime;
        let deadlineTime=filter[0].filter.deadlineTime;
        let closedTime=filter[0].filter.closedTime;


        // console.log(statuses);

        initialValues.status=statuses?statuses:'';
        initialValues.project=projects?projects:'';
        initialValues.columns=columns?columns:'';
        initialValues.requester=requester?requester:'';
        initialValues.company=company?company:'';
        initialValues.creator=creator?creator:'';
        initialValues.assigned=assigned?assigned:'';
        initialValues.tag=tag?tag:'';
        initialValues.search=search?search:'';


        initialValues.createdTime={};
        initialValues.startedTime={};
        initialValues.deadlineTime={};
        initialValues.closedTime={};


        initialValues.createdTime.radio='now';
        initialValues.startedTime.radio='now';
        initialValues.deadlineTime.radio='now';
        initialValues.closedTime.radio='now';


        if(createdTime&&createdTime==='TO=NOW'){
        }else if(createdTime && createdTime.split().length>0){
            initialValues.createdTime.radio='timeRange';
            initialValues.createdTime.from=convertApiStringToDate(createdTime&&createdTime.split(',')[0]?createdTime.split(',')[0]:'');
            initialValues.createdTime.to=convertApiStringToDate(createdTime&&createdTime.split(',')[1]?createdTime.split(',')[1]:'');
        }

        if(startedTime&&startedTime==='TO=NOW'){
        }else if(startedTime && startedTime.split().length>0){
            initialValues.startedTime.radio='timeRange';
            initialValues.startedTime.from=convertApiStringToDate(startedTime&&startedTime.split(',')[0]?startedTime.split(',')[0]:'');
            initialValues.startedTime.to=convertApiStringToDate(startedTime&&startedTime.split(',')[1]?startedTime.split(',')[1]:'');
        }

        if(deadlineTime&&deadlineTime==='TO=NOW'){
        }else if(deadlineTime && deadlineTime.split().length>0){
            initialValues.deadlineTime.radio='timeRange';
            initialValues.deadlineTime.from=convertApiStringToDate(deadlineTime&&deadlineTime.split(',')[0]?deadlineTime.split(',')[0]:'');
            initialValues.deadlineTime.to=convertApiStringToDate(deadlineTime&&deadlineTime.split(',')[1]?deadlineTime.split(',')[1]:'');
        }

        if(closedTime&&closedTime==='TO=NOW'){
        }else if(closedTime && closedTime.split().length>0){
            initialValues.closedTime.radio='timeRange';
            initialValues.closedTime.from=convertApiStringToDate(closedTime&&closedTime.split(',')[0]?closedTime.split(',')[0]:'');
            initialValues.closedTime.to=convertApiStringToDate(closedTime&&closedTime.split(',')[1]?closedTime.split(',')[1]:'');
        }



        // initialValues['filter']['status']=statuses;


        return {
            initialValues: {...filter[0], ...initialValues},
            enableReinitialize: true
        };
    }

    else {
        return{initialValues:{},enableReinitialize: true};
    // else {
    //     return{
    //         initialValues: { ...{columns}},
    //     enableReinitialize: true
    //     };
    }


}

FilterForm = reduxForm({
    form: 'filterForm'
})(FilterForm);

export default connect(mapStateToProps)(FilterForm);


// export default FilterForm;
