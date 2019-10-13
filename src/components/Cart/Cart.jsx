import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCard";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import { useSelector, useDispatch } from "react-redux";

const Cart = props => {
  const state = useSelector(state => state.productData);
  return (
    <section>
      {state.cart.length > 0 ? (
        <>
          <Title name="your" title="cart" />
          <CartColumns />
          <CartList state={state} />
          <CartTotals state={state} history={props.history} />
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

export default Cart;
