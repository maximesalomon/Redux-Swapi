import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetchChar = people => {
    return dispatch => {
        dispatch({ type: FETCHING });
        axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            dispatch({
                type: SUCCESS,
                payload: res.data.results
            });
        })
        .catch(err => {
            dispatch({ type: FAILURE, payload: "Unable to Fetch Star Wars Data" });
        });
    };
}; 