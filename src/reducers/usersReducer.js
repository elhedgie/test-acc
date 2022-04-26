let defaultState = {
  users: [],
};

export default function usersReducer(state = defaultState, action) {
  switch (action.type) {
    case "FETCH":
      return (defaultState = {
        ...defaultState,
        users: action.payload.users,
      });
    default:
      return state;
  }
}
