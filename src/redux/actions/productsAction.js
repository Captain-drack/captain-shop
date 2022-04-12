export const cart = (product) => {
  return {
    type: "CART",
    payload: product,
  };
};

export const deleteCart = (product) => {
  return {
    type: "DELETECART",
    payload: product,
  };
};
