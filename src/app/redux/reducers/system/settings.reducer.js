import { TOGGLE_SIDEBAR, SET_PAGINATION } from "../../constants";

const defaultState = {
  sidebarIsMinified: false,
  paginationValue: false
};

export default function sidebar(state = defaultState, action) {
  switch (action.type) {
    case SET_PAGINATION:
      return { ...state, paginationValue: action.data };

    case TOGGLE_SIDEBAR:
      return {
        sidebarIsMinified: action.data
      };
    default:
      return state;
  }
}
