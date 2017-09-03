import React, {PropTypes} from 'react';


const tasklistcolumn = ({title, name, clickHandler, canOrder, orderBy, orderDirection}) => {


    // data-order-by="status"
    {/*<div dangerouslySetInnerHTML={{__html: getMarkup()}} />*/}

    let caret = '';

    if (orderBy === name) {
        caret = '&uarr;';
        if (orderDirection === 'DESC') {
            caret = '&darr;';
        }

        caret=<span dangerouslySetInnerHTML={{__html:caret}} />

    }


    if(!canOrder){
        return (
            <span>{title}</span>
        );
    }

    return (
        <span onClick={clickHandler} data-order-by={name}
              style={orderBy === name ? {fontWeight: 'bold',cursor:'pointer'} : {cursor:'pointer'}}>{title} {caret}</span>
    );

};


export default tasklistcolumn;