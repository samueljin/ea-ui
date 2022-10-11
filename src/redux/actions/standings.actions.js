import { webConstants, apiConstants } from '../constants/web.constants';
import axios from 'axios';

export const standingsActions = {
    getStandingsByYear,
    sortByPosition
};


function sortByPosition(sortOrder) {

    return dispatch => {
        dispatch({
            type: webConstants.STANDINGS_SORT_REQUEST,
            payload: {}
        })

        axios.get(apiConstants.GET_STANDINGS_URL + "2021" + '/standings'+'?sort='+sortOrder )
            .then(response => {
                console.log(apiConstants.GET_STANDINGS_URL);
                if (response.status == 200) {
                    dispatch({
                        type: webConstants.STANDINGS_SORT_SUCCESS,
                        payload: response.data
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: webConstants.STANDINGS_SORT_FAILURE,
                    payload: "network error"
                })
                console.log(err)
            })

    }
}


//thunk func
function getStandingsByYear() {

    return dispatch => {
        dispatch({
            type: webConstants.GET_STANDINGS_BY_YEAR_REQUEST,
            payload: {}
        })

        axios.get(apiConstants.GET_STANDINGS_URL + "2021" + '/standings')
            .then(response => {
                console.log(apiConstants.GET_STANDINGS_URL);
                if (response.status == 200) {
                    dispatch({
                        type: webConstants.GET_STANDINGS_BY_YEAR_SUCCESS,
                        payload: response.data
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: webConstants.GET_STANDINGS_BY_YEAR_FAILURE,
                    payload: "network error"
                })
                console.log(err)
            })

    }
}




