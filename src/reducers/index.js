import * as ACTIONS from '../constants/actionTypes';
import updateInput from './updateInput';
import submitValue from './submitValue'

export function app (state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_INPUT:
      return updateInput(state, action);

    case ACTIONS.SUBMIT_VALUE:
      return submitValue(state, action);

    default:
      return state;
  }
}
