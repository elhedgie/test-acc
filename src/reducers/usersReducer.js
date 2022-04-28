let defaultState = []

export default function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case "FETCH":
      return (defaultState = [
        ...defaultState, ...action.payload,
      ])
    default:
      return state;
  }
}
