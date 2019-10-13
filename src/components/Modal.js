import React from "react";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeModalAC } from "../actions/productData";

const Modal = () => {
  const dispatch = useDispatch();
  const { modalOpen, modalProduct } = useSelector(state => state.productData);

  const { img, title, price } = modalProduct;
  const closeModal = () => dispatch(closeModalAC());
  return (
    modalOpen && (
      <ModalContainer>
        <div className="container">
          <div className="row">
            <div
              id="modal"
              className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
            >
              <h5>added to the cart</h5>
              <img src={img} className="img-fluid" alt="product" />
              <h5>{title}</h5>
              <h5 className="text-muted">price : {price}</h5>
              <Link to="/">
                <ButtonContainer onClick={() => closeModal()}>
                  Store
                </ButtonContainer>
              </Link>
              <Link to="/cart">
                <ButtonContainer cart onClick={() => closeModal()}>
                  go to cart
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </ModalContainer>
    )
  );
};

export default Modal;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
