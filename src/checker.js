export const checker = (res, getState, dispatch) => {
  // допустим у тебя массив с логинами и паролями лежит где-то здесь в Redux "store.testMocks.credentialsArray"
  console.log(res.res);
  const isLoginAndPasswordFinded = getState.users.users.find(
    (item) => item.login === res.res.login && item.password === res.res.password
  );
  if (isLoginAndPasswordFinded) {
    dispatch({
      type: "AUTH_LOGIN",
      payload: {
        id: res.res.id,
        login: res.res.login,
        password: res.res.password,
        isLogged: res.res.isLogged,
      },
    });
  } else {
    dispatch({ type: "AUTH_FAIL" });
  }
};
