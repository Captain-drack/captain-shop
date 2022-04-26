const { createSelector } = require("@reduxjs/toolkit");

const cartSelector = (state) => state.cart;

export const cartTotalPriceSelector = createSelector([cartSelector], (cart) =>
  cart((total, current) => (total += current.price * current.qty), 0)
);
