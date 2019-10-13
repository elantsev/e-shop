export const HANDLE_DETAIL = "HANDLE_DETAIL";
export const ADD_TO_CART = "ADD_TO_CART";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export function handleDetailAC(id) {
  return { type: HANDLE_DETAIL, payload: { id } };
}

export function handleAddToCartAC(id) {
  return { type: ADD_TO_CART, payload: { id } };
}

export function openModalAC(id) {
  return { type: OPEN_MODAL, payload: { id } };
}

export function closeModalAC(id) {
  return { type: CLOSE_MODAL, payload: { id } };
}
