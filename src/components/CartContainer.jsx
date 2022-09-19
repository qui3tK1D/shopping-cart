import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const cartItem = cartItems.map((cur) => (
    <CartItem
      key={cur.id}
      id={cur.id}
      title={cur.title}
      img={cur.img}
      price={cur.price}
      amount={cur.amount}
    />
  ));
  return (
    <section className="max-w-4xl w-11/12 mx-auto mt-10 py-10">
      <header>
        <h2 className="mb-12 text-center uppercase">your bag</h2>
      </header>
      {amount !== 0 && (
        <>
          <div>{cartItem}</div>
          <footer className="mt-16 text-center">
            <hr className="bg-gray-5 border-transparent" />
            <div className="mt-4">
              <h4 className="flex item-center justify-between">
                total <span>${total.toFixed(2)}</span>
              </h4>
            </div>
            <button className="clear-btn" onClick={() => dispatch(openModal())}>
              clear cart
            </button>
          </footer>
        </>
      )}
      {!amount && (
        <h4 className="text-gray-5 text-center mt-4">is currently empty</h4>
      )}
    </section>
  );
};

export default CartContainer;
