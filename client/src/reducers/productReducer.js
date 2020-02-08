import {
  GET_PRODUCT_DETAILS,
  ADD_PRODUCT_DETAILS,
  PRODUCTS_LOADING,
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  RESET_ACTIVE_PRODUCT,
  GET_PRODUCT_DETAILS_BY_ID,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  RESET_PRODUCTS
} from "../actions/types";

// const initialState = {
//   products: [],
//   loading: false
// };

const INITIAL_STATE = {
  postsList: { products: [], error: null, loading: false },
  newPost: { products: null, error: null, loading: false },
  activeProduct: { product: null, error: null, loading: false },
  deletedPost: { products: null, error: null, loading: false }
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case ADD_PRODUCT_DETAILS:
      return {
        ...state,
        products: [action.payload, ...state.products]
      };

    case GET_PRODUCT_DETAILS:
      // return {
      //   ...state,
      //   products: action.payload,
      //   loading: false
      // };
      return {
        ...state,
        //postsList: { products: action.payload, error: null, loading: false }
        products: action.payload,

        loading: false
      };

    case FETCH_PRODUCT:
      return {
        ...state,
        activeProduct: { ...state.activePost, loading: true }
      };
    case FETCH_PRODUCT_SUCCESS:
      // console.log(action);
      return {
        ...state,
        activeProduct: { product: action.payload, error: null, loading: false }
      };
    case FETCH_PRODUCT_FAILURE:
      error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
      return {
        ...state,
        activeProduct: { product: null, error: error, loading: false }
      };
    case RESET_ACTIVE_PRODUCT:
      return {
        ...state,
        activeProduct: { product: null, error: null, loading: false }
      };

    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: true
      };

    case FETCH_PRODUCTS:
      // start fetching products and set loading = true
      return {
        ...state,
        postsList: { products: [], error: null, loading: true }
      };
    case FETCH_PRODUCTS_SUCCESS: // return list of products and make loading = false
      // console.log(action);
      return {
        ...state,
        postsList: { products: action.payload, error: null, loading: false }
      };
    case FETCH_PRODUCTS_FAILURE: // return error and make loading = false
      error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
      return {
        ...state,
        postsList: { products: [], error: error, loading: false }
      };
    case RESET_PRODUCTS: // reset postList to initial state
      return {
        ...state,
        postsList: { products: [], error: null, loading: false }
      };

    default:
      return state;
  }
}
