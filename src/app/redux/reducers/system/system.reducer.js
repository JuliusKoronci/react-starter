import {IS_DIRTY,MENU_ITEMS_RECEIVED} from '../../constants';
import {fieldSorter} from '../../../../app/services/general';

const defaultState = {
    'isDirty':false,
    'menu':{
        filters:[],
        projects:[],
        tags:[],
        archived:[]
    }
};

export default function system(state=defaultState, action) {
    switch (action.type) {
        case IS_DIRTY:
            return Object.assign({},state,...{'isDirty':action.data});

        case MENU_ITEMS_RECEIVED:

            let menu=action.data;
            menu.filters=menu.filters.sort(fieldSorter(['-public', 'title']));
            menu.projects=menu.projects.concat(menu.archived);
            // filters.sort(fieldSorter(['-public', 'title']))

            return Object.assign({},defaultState, {menu:menu});

        default:
            return state;
    }
}