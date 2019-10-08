import React from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../context";

const ProductList = () => {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {products =>
                products.map(product => <Product product={product} />)
              }
            </ProductConsumer>
          </div>
        </div>
      </div>

      {/*  */}
    </>
  );
};

export default ProductList;
