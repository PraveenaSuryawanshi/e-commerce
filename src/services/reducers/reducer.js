import { cartItem } from "../../constants";

export default function reducer(state = [], action) {
  switch (action.type) {
    case cartItem:
      return [...state, action.amount];
      break;
    default:
      return state;
  }
}
