import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./Paypal";
import { useDispatch } from "react-redux";
import { addTotalsAC, clearCartAC } from "../../actions/productData";

const CartTotals = ({ state, history }) => {
  const { cartSubTotal, cartTax, cartTotal, cart } = state;
  const dispatch = useDispatch();
  const addTotals = () => dispatch(addTotalsAC());
  const clearCart = () => dispatch(clearCartAC());
  useEffect(() => {
    addTotals();
  }, [cart]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={() => clearCart()}
            >
              clear Cart
            </button>
          </Link>
          <h5>
            <span className="text-title">
              subtotal : <strong>{cartSubTotal}</strong>
            </span>
          </h5>
          <h5>
            <span className="text-title">
              tax : <strong>{cartTax}</strong>
            </span>
          </h5>
          <h5>
            <span className="text-title">
              total : <strong>$ {cartTotal}</strong>
            </span>
          </h5>
          <PayPalButton
            total={cartTotal}
            clearCart={clearCart}
            history={history}
          ></PayPalButton>
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
