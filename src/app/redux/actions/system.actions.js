import {
  USERS_ALL_RECEIVED,
  REQUEST_USERS_ALL,
  FILTERS_RECEIVED,
  REQUEST_FILTERS,
  TOGGLE_SIDEBAR,
  SIDEBAR_IS_MINIFIED,
  PROJECTS_RECEIVED,
  OPTIONS_RECEIVED,
  REQUEST_PROJECTS,
  REQUEST_TAGS,
  TAGS_RECEIVED,
  PROJECT_ASSIGNERS_RECEIVED,
  IS_DIRTY,
  REQUEST_MENU,
  SET_PAGINATION,
  MENU_ITEMS_RECEIVED //PROJECT_ASSIGNERS_REQUEST,
} from "../constants";

export function requestMenuItems() {
  return {
    type: REQUEST_MENU
  };
}
export function menuItemsReceived(data) {
  return {
    type: MENU_ITEMS_RECEIVED,
    data
  };
}

//TODO toto sa nahradza
export function requestFilters() {
  return {
    type: REQUEST_FILTERS
  };
}
export function requestProjects() {
  return {
    type: REQUEST_PROJECTS
  };
}

export function requestTags() {
  return {
    type: REQUEST_TAGS
  };
}
//TODO

export function requestAllUsers(url) {
  return {
    type: REQUEST_USERS_ALL,
    url
  };
}

export function usersAllReceived(data) {
  return {
    type: USERS_ALL_RECEIVED,
    data
  };
}

export function filtersReceived(data) {
  return {
    type: FILTERS_RECEIVED,
    data
  };
}

export function projectsReceived(data) {
  return {
    type: PROJECTS_RECEIVED,
    data
  };
}

export function tagsReceived(data) {
  return {
    type: TAGS_RECEIVED,
    data
  };
}

export function toggleSidebar(data) {
  return {
    type: TOGGLE_SIDEBAR,
    data: data,
    storage: SIDEBAR_IS_MINIFIED
  };
}

export function optionsReceived(data) {
  return {
    type: OPTIONS_RECEIVED,
    data
  };
}

export function projectAssignersReceived(data) {
  return {
    type: PROJECT_ASSIGNERS_RECEIVED,
    data
  };
}

export function isDirty(bool) {
  return {
    type: IS_DIRTY,
    data: bool
  };
}

export function setPagination(data) {
  return {
    type: SET_PAGINATION,
    data,
    storage: SET_PAGINATION
  };
}
