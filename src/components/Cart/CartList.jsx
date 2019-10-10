import React from "react";

import CartItem from "./CartItem";

const CartList = props => {
  const { cart, ...value } = props.state;
  console.log(cart, value);

  return (
    <div className="container">
      {cart.map(item => (
        <CartItem key={item.id} item={item} value={value} />
      ))}
    </div>
  );
};

export default CartList;
