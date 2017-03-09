import React, {PropTypes} from 'react';


const ColumnVisible = ({toggleRowVisibility, name, columns, className}) => {

    const checked=typeof columns[name]!=='undefined'? (!!columns[name].visible):false;

    const cssClass="uk_dp1 uk-text-muted " + className?className:'';

    return (
        <label className={cssClass} >Column {checked?'checked':'not'}
            <input type="checkbox" onChange={toggleRowVisibility.bind(null)}
                   checked={checked}
                   name={name} data-md-icheck/>
        </label>

    );
};


export default ColumnVisible;