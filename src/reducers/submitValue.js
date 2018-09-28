export default function submitValue (state, action) {
  return {
    ...state,
    input: {
      ...state.input,
      savedValues: [
        ...state.input.savedValues,
        state.input.value
      ]
    }
  }
}