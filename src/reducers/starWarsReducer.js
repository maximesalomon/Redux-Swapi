import { FETCHING, SUCCESS, FAILURE } from "../actions";

const initialState = {
  characters: [],
  loading: false,
  error: '',
};

export const charsReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case FETCHING: 
        return {...previousState, loading: true };
    case SUCCESS:
        return Object.assign({}, previousState, {
          characters: action.payload,
          error: '',
          loading: false,
        })
    case FAILURE: 
        return {...previousState, error: action.payload, loading: false };
    default:
      return previousState;
  }
};
