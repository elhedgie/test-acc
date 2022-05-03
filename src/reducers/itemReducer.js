import { v4 as uuidv4 } from "uuid";

let defaultState = [
    {
      id: uuidv4(),
      name: "Liza Shaw",
      number: "044-234-245",
    },
    {
      id: uuidv4(),
      name: "Andrew Reminski",
      number: "044-266-095",
    },
    {
      id: uuidv4(),
      name: "Brandon Broom",
      number: "044-987-373",
    },
  ]

export default function itemsReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD":
      return state = [...state, action.payload];
    case "SEARCH":
      return  [...action.payload];
    case "DELETE":
      return  [...action.payload];
    default:
      return state;
  }
}
