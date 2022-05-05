import { fetchingUsers } from "../reducers/actionCreators/actionCreators";

export default function fetchUsers(dispatch) {

  
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((json) => dispatch(fetchingUsers(json)))
      .catch(function () {
        console.log("error");
      })
}
