import React from "react";
import { useDispatch } from "react-redux";
import { ChevronDown, ChevronUp } from "../icons";
import { removeItem, increase, decrease } from "../features/cart/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  return (
    <article className="flex items-center my-6">
      <img
        className="w-20 h-20 mr-4 object-cover"
        src={props.img}
        alt={props.title}
      />
      <div className="flex-1 font-medium tracking-wide mb-2">
        <h4>Google pixel</h4>
        <h4 className="text-gray-5 mt-2 mb-2">${props.price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(props.id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increase(props.id));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{props.amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (props.amount === 1) {
              dispatch(removeItem(props.id));
              return;
            }
            dispatch(decrease(props.id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
