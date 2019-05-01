import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_MOBILES_PENDING,
    REQUEST_MOBILES_SUCCESS,
    REQUEST_MOBILES_FAILED
} from './constants';

const intialStateSearch = {
    searchField: ''
}

export const searchMobiles = (state=intialStateSearch, action={}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField:action.payload});// === return { ...state, searchField:action.payload }
        default:
            return state;
    }
}

const intialStateMobiles = {
    isPending: false,
    mobiles: [],
    error: ''
}

export const requestMobiles = (state = intialStateMobiles, action={}) => {
    switch(action.type){
        case REQUEST_MOBILES_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_MOBILES_SUCCESS:
            return Object.assign({}, state, { mobiles: action.payload, isPending: false })
        case REQUEST_MOBILES_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false} )
        default:
            return state;
    }
}