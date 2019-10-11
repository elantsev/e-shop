import React, { useState, useEffect } from "react";
import { storeProducts as products, detailProduct } from "./data";

const ProductContext = React.createContext();

const initialState = {
  products,
  detailProduct,
  cart: [],
  modalOpen: false,
  modalProduct: detailProduct,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0
};

const ProductProvider = ({ children }) => {
  const [state, setState] = useState(JSON.parse(JSON.stringify(initialState)));
  useEffect(() => addTotals(), [state.cart]);

  const openModal = id => {
    const currentProduct = state.products.find(product => product.id === id);
    setState(state => ({
      ...state,
      modalProduct: currentProduct,
      modalOpen: true
    }));
  };

  const closeModal = () => {
    setState(state => ({
      ...state,
      modalOpen: false
    }));
  };

  const handleDetail = id => {
    const currentProduct = state.products.find(product => product.id === id);
    setState(state => ({
      ...state,
      detailProduct: currentProduct
    }));
  };

  const addToCart = id => {
    const currentProduct = state.products.find(product => product.id === id);
    currentProduct.inCart = true;
    currentProduct.count = currentProduct.count += 1;
    currentProduct.total = currentProduct.count * currentProduct.price;
    setState(state => ({
      ...state,
      cart: [...state.cart, currentProduct]
    }));
  };

  const increment = id => {
    setState(state => ({
      ...state,
      cart: [
        ...state.cart.map(product => {
          if (product.id === id) product.count += 1;
          return product;
        })
      ]
    }));
  };

  const decrement = id => {
    setState(state => ({
      ...state,
      cart: [
        ...state.cart.map(product => {
          if (product.id === id && product.count >= 1) product.count -= 1;
          return product;
        })
      ]
    }));
  };

  const removeItem = id => {
    setState(state => ({
      ...state,
      cart: [...state.cart.filter(product => product.id !== id)]
    }));
  };

  const clearCart = () => {
    setState(state => ({
      ...state,
      cart: []
    }));
  };

  const addTotals = () => {
    const cartSubTotal = state.cart.reduce(
      (acc, product) => acc + product.price * product.count,
      0
    );
    const cartTax = cartSubTotal * 0.1;
    const cartTotal = cartSubTotal + cartTax;
    setState(state => ({
      ...state,
      cartSubTotal,
      cartTax,
      cartTotal
    }));
  };

  return (
    <ProductContext.Provider
      value={{
        ...state,
        handleDetail,
        addToCart,
        openModal,
        closeModal,
        increment,
        decrement,
        removeItem,
        clearCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
