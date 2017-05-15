import React, {PropTypes} from 'react';
import avatar from '../../../../views/assets/img/avatars/user-alt.png';
import Image from '../../../../components/Main/Image';
import {LOAD_ATTACHMENT} from '../../../../../api/urls';

const userAvatar = ({user, className}) => {


    {/*<img className="md-user-image" src={user.image ? user.image : avatar}*/}
         {/*alt={user.username} title={user.username}/>*/}

         console.log(user);
    return (
    <Image src={ user && user.image? LOAD_ATTACHMENT + '/'+user.image:'/assets/img/avatars/user.png'} staticSrc='/assets/img/avatars/user.png' fetchFromApi={!!(user && user.image)} alt="user avatar" className={className} />
    );
};

userAvatar.propTypes = {
    user: PropTypes.object.isRequired
};

export default userAvatar;