import * as constants from "../constants";

export function newFilter(data, config) {
  return {
    type: constants.FILTER_CREATED,
    data,
    config
  };
}

export function filterReceived(data) {
  return {
    type: constants.FILTER_RECEIVED,
    data
  };
}

export function filterOptionsReceived(data) {
  return {
    type: constants.FILTER_OPTIONS_RECEIVED,
    data
  };
}
