import React, { PropTypes } from "react";
import Image from "../../../../components/Main/Image";
import { LOAD_ATTACHMENT } from "../../../../../api/urls";

const userAvatar = ({ user, className }) => {
  const staticSrc = "/assets/img/avatars/user.png";
  const src =
    user && user.image
      ? LOAD_ATTACHMENT + "/" + user.image
      : "/assets/img/avatars/user.png";
  const fetchFromApi = !!(user && user.image);

  return (
    <Image
      src={src}
      staticSrc={staticSrc}
      fetchFromApi={fetchFromApi}
      alt="user avatar"
      className={className}
    />
  );
};

userAvatar.propTypes = {
  user: PropTypes.object.isRequired
};

export default userAvatar;
