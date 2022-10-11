import { webConstants } from '../constants/web.constants';

const initialState = {
    items: [],
    loading: false,
    loadingError: ''
}

export function standings(state = {}, action) {
    switch (action.type) {
        case webConstants.GET_STANDINGS_BY_YEAR_REQUEST:
            return {
                loading: true
            };
        case webConstants.GET_STANDINGS_BY_YEAR_SUCCESS:
            return {
                loading: false,
                items: action.payload
            };
        case webConstants.GET_STANDINGS_BY_YEAR_FAILURE:
            return {
                loadingError: action.error
            };
        case webConstants.STANDINGS_SORT_REQUEST:
            return {
                loading: true
            };

        case webConstants.STANDINGS_SORT_SUCCESS:
            return {
                loading: false,
                items: action.payload
            };

        default:
            return state
    }
}