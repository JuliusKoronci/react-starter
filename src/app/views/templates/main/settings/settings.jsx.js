import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const settings = (prop) => {
    return (
        <div>View
        <Link to="settings/users">User settings</Link>
        </div>
    );
};

settings.propTypes = {
    prop: PropTypes.object.isRequired
};

export default settings;
