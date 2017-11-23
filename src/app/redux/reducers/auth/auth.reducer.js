import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_LOGOUT,
  PROFILE_RECEIVED,
  AVATAR_UPLOADED
} from "../../constants";
import { LOAD_ATTACHMENT_WITHOUT_BASE } from "../../../../api/urls";

const defaultState = {
  authenticated: false,
  jwt: "",
  user: {},
  error: ""
};

export default function auth(state = defaultState, action) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        authenticated: true,
        jwt: action.data,
        user: action.user,
        error: ""
      };
    case AVATAR_UPLOADED:
      console.log("avatar uploaded", action);
      //   action.config.id/action.id
      //   action.values.image;

      if (state.user.id === action.id) {
        return {
          ...state,
          user: {
            ...state.user,
            profileImage:
              LOAD_ATTACHMENT_WITHOUT_BASE + "/" + action.values.image,
            image: action.values.image
          }
        };
      } else {
        return state;
      }
    case PROFILE_RECEIVED:
      const {
        facebook,
        google,
        linkdin,
        name,
        signature,
        surname,
        twitter
      } = action.data.data.detailData;
      const { email, image, language, username } = action.data.data;
      const user = {
        facebook,
        google,
        linkdin,
        name,
        signature,
        surname,
        twitter,
        email,
        image,
        language,
        username
      };
      return {
        ...state,
        user: { ...state.user, ...user }
      };
    case AUTH_LOGIN_ERROR:
      return {
        authenticated: false,
        jwt: "",
        user: {},
        error: action.message
      };
    case AUTH_LOGOUT:
      return {
        authenticated: false,
        jwt: "",
        user: {},
        error: ""
      };
    default:
      return state;
  }
}
