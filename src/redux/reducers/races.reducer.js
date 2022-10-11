import { webConstants } from '../constants/web.constants';

const initialState = {
    items: [],
    loading: false,
    loadingError: ''
}

export function races(state = {}, action) {
    switch (action.type) {
        case webConstants.RACE_SORT_REQUEST:
        case webConstants.GET_RACES_BY_YEAR_ROUND_REQUEST:
            return {
                loading: true
            };
        case webConstants.RACE_SORT_SUCCESS:
        case webConstants.GET_RACES_BY_YEAR_ROUND_SUCCESS:
            return {
                items: action.payload
            };
        case webConstants.RACE_SORT_FAILURE:
        case webConstants.GET_RACES_BY_YEAR_ROUND_FAILURE:
            return {
                loadingError: action.error
            };
        default:
            return state
    }
}