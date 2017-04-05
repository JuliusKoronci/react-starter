import React, {Component} from 'react';
import {Link} from 'react-router';
import {Creatable} from 'react-select';
import Select from 'react-select';
import ColumnVisible from '../../../views/templates/main/filter/columnVisible.jsx';
import {convertApiStringToDate} from '../../../services/general';

import {Field, change, reduxForm, reset} from 'redux-form';
import {connect} from 'react-redux';
import FilterFromTimepicker from './FilterFormTimepicker';
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

    resetForm=(e)=>{
        e.preventDefault();
        this.props.dispatch(reset('filterForm'));
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

                <button className="md-btn md-btn-danger md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                   onClick={this.resetForm.bind(null)} >RESET</button>


                {this.props.filter && <button className="md-btn md-btn-success md-btn-small md-btn-wave-light waves-effect waves-button waves-light" type="submit"
                        onClick={saveFilter.bind(null)}>SAVE</button>}


                <button type="submit"
                        className="md-btn md-btn-primary md-btn-small md-btn-wave-light waves-effect waves-button waves-light"
                        onClick={getFilterTasks.bind(null)} >FILTER</button>


                <ul className="md-list md-list-addon">



                    {this.props.filter && <Field name="title" type="text" validate={[]} component={renderField} label="Filter Name"/>}



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






                    <FilterFromTimepicker name={'createdTime'} label={'Created At'} columnVisibilityName={'columns.created'} changeRowVisibility={this.changeRowVisibility} />
                    <FilterFromTimepicker name={'startedTime'} label={'Started At'} columnVisibilityName={'columns.started'} changeRowVisibility={this.changeRowVisibility} />
                    <FilterFromTimepicker name={'deadlineTime'} label={'Deadline At'} columnVisibilityName={'columns.deadline'} changeRowVisibility={this.changeRowVisibility} />
                    <FilterFromTimepicker name={'closedTime'} label={'Closed At'} columnVisibilityName={'columns.closed'} changeRowVisibility={this.changeRowVisibility} />





                    {/*<p className="uk-text-muted">Created at</p>*/}

                        {/*<Field type="radio" name="createdTime.radio" value="now" data-md-icheck component={renderField} />*/}
                        {/*<label className="inline-label">Overdue</label>*/}

                        {/*<Field type="radio" name="createdTime.radio" value="timeRange" data-md-icheck component={renderField} />*/}
                        {/*<label className="inline-label">Time range</label>*/}

                    {/*<div className="uk-grid" data-uk-grid-margin>*/}
                        {/*<div className="uk-width-medium-1-2">*/}
                            {/*<Field name="createdTime.from" type="text" validate={[]} component={renderDatepicker} label="Created from:" />*/}
                        {/*</div>*/}

                        {/*<div className="uk-width-medium-1-2">*/}

                            {/*<Field name="createdTime.to" type="text" validate={[]} component={renderDatepicker} label="To:" />*/}

                            {/*<Field name="columns.created" type="checkbox" className="alignright" validate={[]}*/}
                                   {/*component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />*/}

                        {/*</div>*/}
                    {/*</div>*/}



                    {/*<hr/>*/}
                    {/*<p className="uk-text-muted">Started at</p>*/}

                    {/*<Field type="radio" name="startedTime.radio" value="now" data-md-icheck component={renderField} />*/}
                    {/*<label className="inline-label">Overdue</label>*/}

                    {/*<Field type="radio" name="startedTime.radio" value="timeRange" data-md-icheck component={renderField} />*/}
                    {/*<label className="inline-label">Time range</label>*/}



                    {/*<div className="uk-grid" data-uk-grid-margin>*/}
                        {/*<div className="uk-width-medium-1-2">*/}

                            {/*<Field name="startedTime.from" type="text" validate={[]} component={renderDatepicker} label="From:" />*/}

                        {/*</div>*/}
                        {/*<div className="uk-width-medium-1-2">*/}

                            {/*<Field name="startedTime.to" type="text" validate={[]} component={renderDatepicker} label="To:" />*/}

                            {/*<Field name="columns.started" type="checkbox" className="alignright" validate={[]}*/}
                                   {/*component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<hr/>*/}





                    {/*<p className="uk-text-muted">Deadline at</p>*/}

                    {/*<Field type="radio" name="deadlineTime.radio" value="now" data-md-icheck component={renderField} />*/}
                    {/*<label className="inline-label">Overdue</label>*/}

                    {/*<Field type="radio" name="deadlineTime.radio" value="timeRange" data-md-icheck component={renderField} />*/}
                    {/*<label className="inline-label">Time range</label>*/}

                    {/*<div className="uk-grid" data-uk-grid-margin>*/}
                        {/*<div className="uk-width-medium-1-2">*/}
                            {/*<Field name="deadlineTime.from" type="text" validate={[]} component={renderDatepicker} label="From:" />*/}
                        {/*</div>*/}
                        {/*<div className="uk-width-medium-1-2">*/}

                            {/*<Field name="deadlineTime.to" type="text" validate={[]} component={renderDatepicker} label="To:" />*/}
                            {/*<Field name="columns.deadline" type="checkbox" className="alignright" validate={[]}*/}
                                   {/*component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />*/}

                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<hr/>*/}


                    {/*<p className="uk-text-muted">Closed at</p>*/}
                    {/*<Field type="radio" name="closedTime.radio" value="now" data-md-icheck component={renderField} />*/}
                    {/*<label className="inline-label">Overdue</label>*/}

                    {/*<Field type="radio" name="closedTime.radio" value="timeRange" data-md-icheck component={renderField} />*/}
                    {/*<label className="inline-label">Time range</label>*/}

                    {/*<div className="uk-grid" data-uk-grid-margin>*/}
                        {/*<div className="uk-width-medium-1-2">*/}

                            {/*<Field name="closedTime.from" type="text" validate={[]} component={renderDatepicker} label="Closed from:" />*/}

                        {/*</div>*/}
                        {/*<div className="uk-width-medium-1-2">*/}

                            {/*<Field name="closedTime.to" type="text" validate={[]} component={renderDatepicker} label="To:" />*/}
                            {/*<Field name="columns.closed" type="checkbox" className="alignright" validate={[]}*/}
                                   {/*component={renderField} label="Column" actions={{onChange:this.changeRowVisibility.bind(null)}} />*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<hr/>*/}




                </ul>


            </form>
        );
    }
}


function mapStateToProps(state, ownProps) {
    const filterId = ownProps.params.filterId;
    let filter = state.filter.filter((filter) => parseInt(filter.id, 10) === parseInt(filterId, 10));


    let columns={};


    let visibleColumns=ownProps.columns.map((column)=>{
        let key = Object.keys(column)[0];
        if(column.hasOwnProperty(key) &&  typeof column[key] !== 'undefined' && (!!column[key]) ){
            return key;
        }
    }).filter((el)=>{return el!== undefined;});

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
    let timePickers=['createdTime','startedTime','deadlineTime','closedTime'];

    timePickers.map(picker=>{
        // initialValues[picker]={};
        // initialValues[picker]={radio:'timeRange'};
        initialValues[picker+'Radio']='timeRange';
    });



    // console.log(filter[0])
    if (filter.length > 0) {
        //visible columns
        filter=filter[0];
        filter.columns.map((column)=>{ columns[column]=true });

        let statuses=filter.filter.status;//.split(',');
        let projects=filter.filter.project;
        let requester=filter.filter.requester;
        let company=filter.filter.company;
        let creator=filter.filter.creator;
        let assigned=filter.filter.assigned;
        let tag=filter.filter.tag;
        let search=filter.filter.search;




        // let createdTime=filter.filter.createdTime;
        // let startedTime=filter.filter.startedTime;
        // let deadlineTime=filter.filter.deadlineTime;
        // let closedTime=filter.filter.closedTime;


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


        timePickers.map(picker=>{
            initialValues[picker]={};
            initialValues[picker+'Radio']='timeRange';

            if(filter.filter[picker] && filter.filter[picker]==='TO=NOW' ){
                initialValues[picker+'Radio']='now';
            }else if(filter.filter[picker] && filter.filter[picker].split().length>0){
                initialValues[picker+'Radio']='timeRange';
                initialValues[picker].from=convertApiStringToDate(filter.filter[picker]&&filter.filter[picker].split(',')[0]?filter.filter[picker].split(',')[0]:'');
                initialValues[picker].to=convertApiStringToDate(filter.filter[picker]&&filter.filter[picker].split(',')[1]?filter.filter[picker].split(',')[1]:'');
            }

        });


        // if(createdTime&&createdTime==='TO=NOW'){
        // }else if(createdTime && createdTime.split().length>0){
        //     initialValues.createdTime.radio='timeRange';
        //     initialValues.createdTime.from=convertApiStringToDate(createdTime&&createdTime.split(',')[0]?createdTime.split(',')[0]:'');
        //     initialValues.createdTime.to=convertApiStringToDate(createdTime&&createdTime.split(',')[1]?createdTime.split(',')[1]:'');
        // }



        // initialValues['filter']['status']=statuses;
        // console.log('is filter', initialValues);

        return {
            initialValues: {...filter, ...initialValues},
            enableReinitialize: true
        };
    }

    else {
        // console.log('isnt filter', initialValues);
        return{initialValues:{...initialValues},enableReinitialize: true};
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

