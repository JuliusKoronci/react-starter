import React from 'react';

const closeDate = () => {
    return (
        <div className="uk-input-group" style={{marginTop: '20px'}}>
            <span className="uk-input-group-addon"><i className="material-icons">&#xE5CD;</i></span>
            <label className="uk-text-muted" htmlFor="uk_dp_1">Close date</label>
            <input className="md-input" type="text" id="uk_dp_1" data-uk-datepicker="{format:'DD.MM.YYYY'}"/>
        </div>
    );
};

export default closeDate;