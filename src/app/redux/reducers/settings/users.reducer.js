import {
  USERS_RECEIVED,
  USER_RECEIVED,
  AVATAR_UPLOADED
} from "../../constants";

const defaultState = {
  data: [],
  _links: {},
  total: 0,
  page: 1,
  numberOfPages: 0
};

export default function users(state = defaultState, action) {
  switch (action.type) {
    case AVATAR_UPLOADED:
      console.log("avatar uploaded user", action);
      const user = state.data.filter(
        user => parseInt(user.id, 10) === parseInt(action.id, 10)
      );

      if (user.length) {
        const newUserImage = action.values.image;
        return {
          ...state,
          data: state.data.map(u => {
            if (parseInt(u.id, 10) === parseInt(user[0].id, 10)) {
              return { ...u, image: newUserImage };
            }
            return u;
          })
        };
      } else {
        return state;
      }
    case USERS_RECEIVED:
      return action.response;
    case USER_RECEIVED:
      return {
        ...state,
        data: [action.response.data]
      };
    default:
      return state;
  }
}
