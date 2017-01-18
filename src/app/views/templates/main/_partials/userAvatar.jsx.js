import React, {PropTypes} from 'react';
import avatar from '../../../../views/assets/img/avatars/user-alt.png';

const userAvatar = ({user}) => {
    return (
        <img className="md-user-image" src={user.image ? user.image : avatar}
             alt={user.username} title={user.username}/>
    );
};

userAvatar.propTypes = {
    user: PropTypes.object.isRequired
};

export default userAvatar;