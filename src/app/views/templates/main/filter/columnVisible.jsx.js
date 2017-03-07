import React, {PropTypes} from 'react';


const ColumnVisible = ({toggleRowVisibility, name, columns}) => {

    const checked=typeof columns[name]!=='undefined'? (!!columns[name].visible):false;

    return (
        <label className="uk_dp1 uk-text-muted">Column
            <input type="checkbox" onChange={toggleRowVisibility.bind(null)}
                   checked={checked}
                   name={name} data-md-icheck/>
        </label>

    );
};


export default ColumnVisible;