import React from 'react';
import {Field} from 'redux-form';
import {renderField, renderDatepicker} from '../../../forms/field.tpl';


const FilterDatePicker = ({name, changeRowVisibility, label, columnVisibilityName, datePickerClear}) => {

    return ( <div>
            <p className="uk-text-muted">{label}</p>
            <Field type="radio" name={name + 'Radio'} value="now" data-md-icheck component={renderField}/>
            <label className="inline-label">Overdue</label>

            <Field type="radio" name={name + 'Radio'} value="timeRange" data-md-icheck component={renderField}/>
            <label className="inline-label">Time range</label>

            <div className="uk-grid" data-uk-grid-margin>
                <div className="uk-width-medium-1-2">

                    <Field name={name + '.from'} type="text" validate={[]} component={renderDatepicker} label="From:"/>

                </div>
                <div className="uk-width-medium-1-2">

                    <Field name={name + '.to'} type="text" validate={[]} component={renderDatepicker} label="To:"/>

                    <span onClick={datePickerClear.bind(null,name)} >X Clear</span>

                    <Field name={columnVisibilityName} type="checkbox" className="alignright" validate={[]}
                           component={renderField} label="Column" actions={{onChange: changeRowVisibility.bind(null)}}/>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default FilterDatePicker;

