import React from 'react';
import {Creatable} from 'react-select';

const tag = ({tagValues, setValues, options}) => {

    const values = tagValues.map(value => {
        return {
            value: value.id,
            label: value.title
        }
    });
    return (
        <div className="uk-input-group" style={{marginTop: '10px'}}>
            <span className="uk-input-group-addon"><i className="material-icons">&#xE893;</i></span>
            <label className="uk-text-muted">Tag</label>
            <Creatable name="tags"
                       className="md-input"
                       value={values}
                       joinValues={true}
                       multi={true}
                       options={options}
                       onChange={setValues}
            />
        </div>
    );
};

export default tag;