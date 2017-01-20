import React, {PropTypes} from 'react';

const profile = ({user}) => {
    return (
        <div>Profile {user.username} {user.email} ({user.phone})</div>
    );
};

profile.propTypes = {
    user: PropTypes.object.isRequired
};

export default profile;
