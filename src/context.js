import React, { useState } from "react";
import { storeProducts as products, detailProduct } from "./data";

const ProductContext = React.createContext();

const initialState = {
  products,
  detailProduct
};

const ProductProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const handleDetail = () => {
    console.log("hendleDetail");
  };
  const addToCart = () => {
    console.log("addToCart");
  };

  return (
    <ProductContext.Provider value={{ ...state, handleDetail, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
