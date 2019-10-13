import React from "react";
import Product from "./Product";
import Title from "./Title";
import { useSelector } from "react-redux";

const ProductList = () => {
  const products = useSelector(state => state.productData.products);

  return (
    <div className="py-5">
      <div className="container">
        <Title name="our" title="products" />
        <div className="row">
          {products.map(product => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
