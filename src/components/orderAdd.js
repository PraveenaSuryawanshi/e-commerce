import React, { useState, useEffect } from "react";
import json from "../singleItem.json";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { cartValue } from "../services/action/action";

const OrderAdd = (props) => {
  const [value, setValue] = useState(1);

  const dispatch = useDispatch();

  const handledata = (e) => {
    e.preventDefault();
    json.items.map((items) => {
      if (items.id == params.id) {
        dispatch(cartValue(items));
      }
    });
  };

  const onchangeInput = (e) => {
    localStorage.setItem("items", JSON.stringify(value));
    setValue(e.target.value);
    // console.log(value);
  };

  let params = useParams();
  localStorage.setItem("ids", JSON.stringify(props.id));

  return (
    <>
      <form action="" method="get">
        <label htmlFor="quantity">Quantity:</label>
        <input
          name="quantity"
          type="number"
          className="quantity-text"
          id="quantity"
          value={value}
          onChange={onchangeInput}
          min="1"
          max="5"
        />

        <button className="button" id={props.id} onClick={handledata}>
          {props.value}
        </button>
      </form>
    </>
  );
};

export default OrderAdd;
