import * as ACTIONS from '../constants/actionTypes';

export default function updateInput (value) {
  return {
    type: ACTIONS.UPDATE_INPUT,
    payload: {
      value
    }
  }
}
