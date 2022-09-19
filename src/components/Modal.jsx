import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";
import { clearCart } from "../features/cart/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="fixed top-0 left-0 w-full h-full bg-black/70 z-10 flex items-center justify-center">
      <div className="bg-white max-w-sm mx-2 rounded py-8 px-4">
        <h4 className="text-center leading-normal">
          Remove all items from your shopping carts?
        </h4>
        <div className="flex items-center justify-around mt-4">
          <button
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
