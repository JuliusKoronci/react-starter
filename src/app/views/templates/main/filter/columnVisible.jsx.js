import React, {PropTypes} from 'react';


const ColumnVisible = ({toggleRowVisibility, name, columns, className}) => {

    let checked=typeof columns[name]!=='undefined'? (!!columns[name].visible):false;
    // console.log(name,checked);
    // console.log(columns);

    const cssClass="uk_dp1 uk-text-muted " + className?className:'';

    return (
        <label className={cssClass} >Column
            <input type="checkbox" onChange={toggleRowVisibility.bind(null,name)}
                   checked={checked}
                   name={name}
                   data-md-icheck/>
        </label>

    );
};


export default ColumnVisible;