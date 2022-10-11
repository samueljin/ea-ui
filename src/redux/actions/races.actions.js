import { webConstants, apiConstants } from '../constants/web.constants';
import axios from 'axios';

export const racesActions = {
    getRacesByYearAndRound,
    sortByPosition
};

function sortByPosition(sortOrder) {

    return dispatch => {
        dispatch({
            type: webConstants.RACE_SORT_REQUEST,
            payload: {}
        })

        axios.get(apiConstants.GET_RACES_URL +  '2021/1/results?sort='+sortOrder )
            .then(response => {
               
                if (response.status == 200) {
                    dispatch({
                        type: webConstants.RACE_SORT_SUCCESS,
                        payload: response.data
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: webConstants.RACE_SORT_FAILURE,
                    payload: "fail to sort"
                })
                console.log(err)
            })

    }
}


//thunk func
function getRacesByYearAndRound(year, round) {

    return dispatch => {
        dispatch({
            type: webConstants.GET_RACES_BY_YEAR_ROUND_REQUEST,
            payload: {}
        })

        axios.get(apiConstants.GET_RACES_URL + year + '/'+round+'/results')
            .then(response => {
                console.log(apiConstants.GET_RACES_URL);
                if (response.status == 200) {                
                    dispatch({
                        type: webConstants.GET_RACES_BY_YEAR_ROUND_SUCCESS,
                        payload: response.data
                    })
                }
            })
            .catch(err => {
                dispatch({
                    type: webConstants.GET_RACES_BY_YEAR_ROUND_FAILURE,
                    payload: "failed to get races by year and round"
                })
                console.log(err)
            })

    }
}
