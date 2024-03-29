import React from "react";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  handleDetailAC,
  handleAddToCartAC,
  openModalAC
} from "../actions/productData";

const Details = ({ match }) => {
  const detailProduct = useSelector(state => state.productData.detailProduct);
  const dispatch = useDispatch();

  const { id, company, img, info, price, title, inCart } = detailProduct;
  const addToCart = id => dispatch(handleAddToCartAC(id));
  const openModal = id => dispatch(openModalAC(id));
  const handleDetail = id => dispatch(handleDetailAC(id));
  if (+match.params.id !== id) {
    handleDetail(+match.params.id);
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={img} className="img-fluid" alt="product" />
        </div>

        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>model : {title}</h2>
          <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
            made by : <span className="text-uppercase">{company}</span>
          </h4>
          <h4 className="text-blue">
            <strong>
              price : <span>{price}</span>
            </strong>
          </h4>
          <p className="text-capitalized font-weight-bold mt-3 mb-0">
            some info about product
          </p>
          <p className="text-muted lead">{info}</p>
          <div>
            <Link to="/">
              <ButtonContainer>back to product</ButtonContainer>
            </Link>
            <ButtonContainer
              cart
              disabled={inCart}
              onClick={e => {
                e.preventDefault();
                addToCart(id);
                openModal(id);
              }}
            >
              {inCart ? "inCart" : "add to cart"}
            </ButtonContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
