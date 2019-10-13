export const HANDLE_DETAIL = "HANDLE_DETAIL";
export const ADD_TO_CART = "ADD_TO_CART";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const INCREMENT_ITEM = "INCREMENT_ITEM";
export const DECREMENT_ITEM = "DECREMENT_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const ADD_TOTALS = "ADD_TOTALS";
export const CLEAR_CART = "CLEAR_CART";

export function handleDetailAC(id) {
  return { type: HANDLE_DETAIL, payload: { id } };
}

export function handleAddToCartAC(id) {
  return { type: ADD_TO_CART, payload: { id } };
}

export function openModalAC(id) {
  return { type: OPEN_MODAL, payload: { id } };
}

export function closeModalAC() {
  return { type: CLOSE_MODAL };
}

export function incrementItemAC(id) {
  return { type: INCREMENT_ITEM, payload: { id } };
}

export function decrementItemAC(id) {
  return { type: DECREMENT_ITEM, payload: { id } };
}

export function removeItemAC(id) {
  return { type: REMOVE_ITEM, payload: { id } };
}

export function addTotalsAC() {
  return { type: ADD_TOTALS };
}

export function clearCartAC() {
  return { type: CLEAR_CART };
}
