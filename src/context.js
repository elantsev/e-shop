import React from "react";
import { storeProducts } from "./data";

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={storeProducts}>
      {children}
    </ProductContext.Provider>
  );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
