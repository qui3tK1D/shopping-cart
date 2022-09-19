import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

const NavBar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav className="py-5 px-8 bg-primary">
      <div className="max-w-4xl mx-auto flex justify-between items-center text-white">
        <h3 className="font-bold tracking-wider">redux toolkit</h3>
        <div className="relative cursor-pointer">
          <CartIcon />
          <div className="amount-container">
            <span className="total-amount">{amount}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
