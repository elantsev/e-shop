import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCard";
import { ProductConsumer } from "../../context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

const Cart = () => {
  return (
    <section>
      <ProductConsumer>
        {state => {
          if (state.cart.length > 0)
            return (
              <>
                <Title name="your" title="cart" />
                <CartColumns />
                <CartList state={state} />
                <CartTotals state={state} />
              </>
            );
          else return <EmptyCart />;
        }}
      </ProductConsumer>
    </section>
  );
};

export default Cart;
