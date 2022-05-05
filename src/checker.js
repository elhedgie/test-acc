// export const checker = (res, usersState, dispatch) => {
//   const isLoginAndPasswordFinded = usersState.find(
//     (item) => item.login === res.login && item.password === res.password
//   );
//   if (isLoginAndPasswordFinded) {
//     dispatch({
//       type: "AUTH_LOGIN",
//       payload: {
//         id: res.id,
//         login: res.login,
//         password: res.password,
//         isLogged: res.isLogged,
//       },
//     });
//   } else {
//     dispatch({ type: "AUTH_FAIL" });
//   }
// };

// fetch("http://localhost:3001/login", {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         method: "POST",
//         body: JSON.stringify(
//           idGenerator({
//             login: loginState,
//             password: passwordState,
//             isLogged: true,
//           })
//         ),