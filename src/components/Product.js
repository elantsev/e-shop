import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  handleDetailAC,
  handleAddToCartAC,
  openModalAC
} from "../actions/productData";

const Product = ({ product }) => {
  const { id, title, img, price, inCart } = product;
  const dispatch = useDispatch();
  const handleDetail = id => dispatch(handleDetailAC(id));
  const addToCart = id => dispatch(handleAddToCartAC(id));
  const openModal = id => dispatch(openModalAC(id));
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5" onClick={() => handleDetail(id)}>
          <Link to={`/details/${id}`}>
            <img src={img} alt="product" className="card-img-top" />
          </Link>
          <button
            className="cart-btn"
            disabled={inCart}
            onClick={e => {
              e.stopPropagation();
              addToCart(id);
              openModal(id);
            }}
          >
            {inCart ? (
              <p className="text-capitalize mb-0">in cart</p>
            ) : (
              <i className="fas fa-cart-plus" />
            )}
          </button>
        </div>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{title}</p>
          <p className="text-blue font-italic mb-0">$ {price}</p>
        </div>
      </div>
    </ProductWrapper>
  );
};

export default Product;

Product.propType = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.4s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.4s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(234, 234, 234, 0.2);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.4s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    position: absolute;
    bottom: 0;
    fight: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 0.4s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
    cursor: pointer;
  }
`;
