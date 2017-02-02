import React from 'react';
import DateTime from '../../../../../../../libs/react-datetime/DateTime';

const closeDate = () => {
    return (
        <div className="uk-input-group" style={{marginTop: '20px'}}>
            <span className="uk-input-group-addon"><i className="material-icons">&#xE5CD;</i></span>
            <label className="uk-text-muted" htmlFor="uk_dp_1">Closed at</label>
            <DateTime className="md-input"/>
        </div>
    );
};

export default closeDate;