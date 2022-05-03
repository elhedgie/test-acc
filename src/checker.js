export const checker = (res, getState, dispatch) => {
<<<<<<< HEAD
=======
  console.log(res);
>>>>>>> 4acb91f7db05fc52bfc7b8b04bd3c06dd97877dc
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
