export const HANDLE_DETAIL = "HANDLE_DETAIL";

export function handleDetailAC(id) {
  return { type: HANDLE_DETAIL, payload: { id } };
}
