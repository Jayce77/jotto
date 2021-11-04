import { actionTypes } from '../actions';

const successReducer = (state = {success: false}, action) => {
  switch(action.type) {
    case (actionTypes.CORRECT_GUESS):
      return {success: true};
    default:
      return state;
  }
}

export default successReducer;