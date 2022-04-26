export default function fetchUsers() {
  return (dispatch) => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((json) => dispatch({ type: "FETCH", payload: { users: json } }))
      .catch(function () {
        console.log("error");
      });
  };
}
