import React from "react";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import {
  incrementItemAC,
  decrementItemAC,
  removeItemAC
} from "../../actions/productData";

const CartList = ({ cart }) => {
  const dispatch = useDispatch();
  const increment = id => dispatch(incrementItemAC(id));
  const decrement = id => dispatch(decrementItemAC(id));
  const removeItem = id => dispatch(removeItemAC(id));

  return (
    <div className="container">
      {cart.map(item => (
        <CartItem
          key={item.id}
          item={item}
          increment={increment}
          decrement={decrement}
          removeItem={removeItem}
        />
      ))}
    </div>
  );
};

export default CartList;
