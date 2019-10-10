import React from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

const ProductList = () => {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
            <ProductConsumer>
              {({ products, handleDetail, addToCart, openModal }) =>
                products.map(product => (
                  <Product
                    product={product}
                    key={product.id}
                    handleDetail={handleDetail}
                    addToCart={addToCart}
                    openModal={openModal}
                  />
                ))
              }
            </ProductConsumer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
