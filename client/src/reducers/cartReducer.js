import {
  SET_PRODUCT_TO_CART,
  SET_PRODUCT_TO_CART_SUCCESS,
  SET_PRODUCT_TO_CART_FAILURE,
  RESET_CART_PRODUCTS,
  FETCH_CART_PRODUCTS,
  FETCH_CART_PRODUCTS_FAILURE,
  FETCH_CART_PRODUCTS_SUCCESS,
  RESET_FETCH_CART_PRODUCTS
} from "../actions/types";

const INITIAL_STATE = {
  cartList: { products: [], error: null, loading: false },
  fetchCartList: { products: [], error: null, loading: false }
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case SET_PRODUCT_TO_CART:
      return {
        ...state,
        cartList: { ...state.products, loading: true }
      };
    case SET_PRODUCT_TO_CART_SUCCESS:
      return {
        ...state,
        cartList: { products: action.payload, error: null, loading: false }
      };
    case SET_PRODUCT_TO_CART_FAILURE:
      error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
      return {
        ...state,
        cartList: { products: null, error: error, loading: false }
      };
    case RESET_CART_PRODUCTS:
      return {
        ...state,
        cartList: { products: null, error: null, loading: false }
      };

    case FETCH_CART_PRODUCTS:
      return {
        ...state,
        fetchCartList: { ...state.products, loading: true }
      };
    case FETCH_CART_PRODUCTS_SUCCESS:
      return {
        ...state,
        fetchCartList: { products: action.payload, error: null, loading: false }
      };
    case FETCH_CART_PRODUCTS_FAILURE:
      error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
      return {
        ...state,
        fetchCartList: { products: null, error: error, loading: false }
      };
    case RESET_FETCH_CART_PRODUCTS:
      return {
        ...state,
        fetchCartList: { products: null, error: null, loading: false }
      };

    default:
      return state;
  }
}
