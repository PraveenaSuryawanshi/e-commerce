import { cartItem } from "../../constants";

export const cartValue = (amount) => {
  return (dispatch) => {
    // console.warn("deposite", amount);
    dispatch({
      type: cartItem,
      amount: amount,
    });
  };
};
