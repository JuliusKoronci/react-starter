import React from 'react';
import {Field} from 'redux-form';
import {renderField, renderDatepicker, renderRadio} from '../../../forms/field.tpl';


const FilterDatePicker = ({name, changeRowVisibility, label, columnVisibilityName, datePickerClear}) => {

    return ( <div>
            <hr/>

            <p>{label}</p>


            <Field name={columnVisibilityName} type="checkbox" className="alignright filter-time-range-column" validate={[]}
                   component={renderField} label="Column" actions={{onChange: changeRowVisibility.bind(null)}}/>

            
            <Field
                type="radio"
                name={name + 'Radio'}
                value="now"
                component={renderRadio}
                label="Overdue"
                className="margin"
            />



            <Field
                type="radio"
                name={name + 'Radio'}
                value="timeRange"
                component={renderRadio}
                label="Time range"
                className="pull-left"
            />


            <button onClick={datePickerClear.bind(null,name)} className="filter-clear">Clear</button>


            <div className="clearfix"></div>
            <div className="uk-grid" data-uk-grid-margin>
                <div className="uk-width-medium-1-2">

                    <Field name={name + '.from'} type="text" validate={[]} component={renderDatepicker} label="From:"/>

                </div>
                <div className="uk-width-medium-1-2">

                    <Field name={name + '.to'} type="text" validate={[]} component={renderDatepicker} label="To:"/>

             </div>



            </div>

        </div>
    );
};

export default FilterDatePicker;

