import React, { useState } from "react";
import { storeProducts as products, detailProduct } from "./data";

const ProductContext = React.createContext();

const initialState = {
  products,
  detailProduct,
  cart: []
};

const ProductProvider = ({ children }) => {
  const [state, setState] = useState(JSON.parse(JSON.stringify(initialState)));

  const handleDetail = id => {
    const currentProduct = state.products.find(product => product.id === id);
    setState(state => ({
      ...state,
      detailProduct: currentProduct
    }));
  };

  const addToCart = id => {
    console.log(id);
    const currentProduct = state.products.find(product => product.id === id);
    currentProduct.inCart = true;
    setState(state => ({
      ...state,
      cart: [...state.cart, currentProduct]
    }));
  };
  console.log(state);

  return (
    <ProductContext.Provider value={{ ...state, handleDetail, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
