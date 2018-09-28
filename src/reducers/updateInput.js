export default function updateInput (state, action) {
  return {
    ...state,
    input: {
      ...state.input,
      value: action.payload.value
    }
  }
}
