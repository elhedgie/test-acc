let defaultState = {
  id: null,
  login: null,
  password: null,
  isLogged: false,
};

export default function loginReducer(state = defaultState, action) {
  switch (action.type) {
    case "AUTH_LOGIN":
      return (defaultState = {
        ...defaultState,
        id: action.payload.id,
        login: action.payload.login,
        password: action.payload.password,
        isLogged: action.payload.isLogged,
      });
    case "AUTH_FAIL":
      alert("Нет такого пользователя!");
    case "AUTH_LOGOUT":
      return (defaultState = {
        ...defaultState,
        login: null,
        password: null,
        isLogged: false,
      });
    default:
      return state;
  }
}
