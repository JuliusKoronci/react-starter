import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import { Creatable } from 'react-select';
import Select from 'react-select';
import FilterForm from '../../../../components/Main/Filter/FilterForm';
import FilterTasks from '../../../../components/Main/Filter/FilterTasks';

const Filter = (prop) => {
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Filter</h1>
                </div>
                <hr/>

                <div className="uk-grid uk-grid-divider" data-uk-grid-margin>

                    <FilterForm />

                    <FilterTasks />





                </div>
            </div>
        </div>
    );
};

Filter.propTypes = {
    prop: PropTypes.object.isRequired
};

export default Filter;
