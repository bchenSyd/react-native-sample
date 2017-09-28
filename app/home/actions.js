//@flow
import * as actionTypes from './constants';
import callAPI from '../common/callAPI';


export function getCarOfTheWeek() {
    return (dispatch: (actionCreator: any) => void) => {
        dispatch({
            type: actionTypes.CAR_OF_THE_WEEK_REQUEST
        });
        callAPI('/carOfTheWeek')
            .then(res => {
                dispatch({
                    type: actionTypes.CAR_OF_THE_WEEK_SUCCESS,
                    payload: res
                });
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.CAR_OF_THE_WEEK_FAILURE
                });
            })
    }
}