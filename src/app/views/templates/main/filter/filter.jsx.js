import React from 'react';
import FilterForm from '../../../../components/Main/Filter/FilterForm';
import FilterTasks from '../../../../components/Main/Filter/FilterTasks';

const Filter = (props) => {
// console.log(props.columns);
    return (
        <div className="md-card">
            <div className="md-card-content">
                <div className="uk-margin-bottom" data-uk-margin>
                    <h1 className="heading_b uk-margin-bottom">Filter</h1>
                </div>
                <hr/>

                <div className="uk-grid uk-grid-divider" data-uk-grid-margin>

                    <FilterForm {...props} />

                    <FilterTasks {...props} />


                </div>
            </div>
        </div>
    );
};


export default Filter;
