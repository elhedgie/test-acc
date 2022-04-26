import { combineReducers, createStore, applyMiddleware } from "redux";
import loginReducer from "./loginReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import usersReducer from "./usersReducer";
import itemsReducer from "./itemReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  users: usersReducer,
  items: itemsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
