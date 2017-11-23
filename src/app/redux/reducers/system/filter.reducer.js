import {
  FILTERS_RECEIVED,
  FILTER_RECEIVED,
  FILTER_CREATED
} from "../../constants";
import { fieldSorter } from "../../../../app/services/general";

export default function filters(state = [], action) {
  switch (action.type) {
    case FILTER_CREATED:
      //   console.log(state, action.data.data);
      let newFilters = [].concat(state, action.data.data);
      return newFilters.sort(fieldSorter(["-public", "title"]));
    case FILTERS_RECEIVED:
      let filters = action.data;
      //sortovanie filtrov, najprv sa zoradia podla public, potom podla title
      return filters.sort(fieldSorter(["-public", "title"]));

    case FILTER_RECEIVED:
      // //TODO
      // // console.log(action)
      // let filter=action.data.data;
      // console.log(filter);
      // console.log('state',state);
      // let newState = Object.assign({}, state, {filter});
      // // console.log('new state: ',newState);
      // // return state.concat(action.data.data);

      return state;
    default:
      return state;
  }
}
