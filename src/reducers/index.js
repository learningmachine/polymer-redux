import * as ACTIONS from '../constants/actionTypes';
import updateInput from './updateInput';

export function app (state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_INPUT:
      return updateInput(state, action);

    default:
      return state;
  }
}
