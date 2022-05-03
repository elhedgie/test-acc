export const checker = (res, getState, dispatch) => {
  console.log(res);
  const isLoginAndPasswordFinded = getState.users.find(
    (item) => item.login === res.login && item.password === res.password
  );
  if (isLoginAndPasswordFinded) {
    dispatch({
      type: "AUTH_LOGIN",
      payload: {
        id: res.id,
        login: res.login,
        password: res.password,
        isLogged: res.isLogged,
      },
    });
  } else {
    dispatch({ type: "AUTH_FAIL" });
  }
};
