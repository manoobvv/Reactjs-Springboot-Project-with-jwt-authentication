import axios from "axios";

import {
  FETCH_CART_PRODUCTS,
  FETCH_CART_PRODUCTS_SUCCESS,
  RESET_FETCH_CART_PRODUCTS,
  FETCH_CART_PRODUCTS_FAILURE
} from "./types";

export const fetchCartProducts = () => dispatch => {
  axios
    .get("/explore/cart")
    .then(res => dispatch(fetchCartProductsSuccess(res.data)));
};

export function fetchCartProductsSuccess(posts) {
  // console.log(posts);
  return {
    type: FETCH_CART_PRODUCTS_SUCCESS,
    payload: posts
  };
}

export function fetchCartProductsFailure(error) {
  return {
    type: FETCH_CART_PRODUCTS_FAILURE,
    payload: error
  };
}
