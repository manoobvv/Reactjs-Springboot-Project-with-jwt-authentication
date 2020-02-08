import axios from "axios";
import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM,
  ITEMS_LOADING,
  ADD_DETAILS,
  GET_DETAILS,
  GET_PRODUCT_DETAILS,
  PRODUCTS_LOADING,
  ADD_PRODUCT_DETAILS,
  GET_PRODUCT_DETAILS_BY_ID,
  FETCH_PRODUCT,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  RESET_ACTIVE_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  RESET_PRODUCTS,
  SET_PRODUCT_TO_CART,
  SET_PRODUCT_TO_CART_SUCCESS,
  SET_PRODUCT_TO_CART_FAILURE,
  RESET_CART_PRODUCTS,
  ADD_NEW_USER,
  ADD_NEW_USER_SUCCESS,
  ADD_NEW_USER_FAILURE,
  RESET_ADD_NEW_USER,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  RESET_USER_LOGIN
} from "./types";

// const config = {
//   headers: { Authorization: `Bearer ${localStorage.getItem(accessToken)}` }
// };

export const addNewUser = userDetails => dispatch => {
  axios
    .post(`/public/signup`, userDetails)
    .then(res => dispatch(addNewUserSuccess(res.data)));
};

export function addNewUserSuccess(user) {
  // console.log(posts);
  return {
    type: ADD_NEW_USER_SUCCESS,
    payload: user
  };
}

export const userLogin = userDetails => dispatch => {
  console.log(userDetails);
  axios.post(`/public/signin`, userDetails, {}).then(res => {
    const token = res.data.accessToken;
    localStorage.setItem("Access Token", token);
    console.log(`Bearer ${localStorage.getItem("Access Token")}`);
    dispatch(userLoginSuccess(res.data));
  });
};

export function userLoginSuccess(user) {
  // console.log(posts);
  return {
    type: USER_LOGIN_SUCCESS,
    payload: user
  };
}

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get("./api/items").then(res =>
    dispatch({
      type: GET_ITEMS,
      payload: res.data
    })
  );
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_ITEM,
      payload: id
    })
  );
};

export const addItem = item => dispatch => {
  axios.post("/api/items", item).then(res =>
    dispatch({
      type: ADD_ITEM,
      payload: res.data
    })
  );
};

export const addDetails = item => dispatch => {
  axios.post("/api/details/insert", item).then(res =>
    dispatch({
      type: ADD_DETAILS,
      payload: res.data
    })
  );
};

export const getDetails = item => dispatch => {
  axios.get("/user/all", item).then(res =>
    dispatch(
      {
        type: GET_DETAILS,
        payload: res.data
      },
      console.log(res.data)
    )
  );
};

export const fetchProducts = () => dispatch => {
  axios
    .get("/explore/products/all", {
      headers
    })
    .then(res => dispatch(fetchProductsSuccess(res.data)));
};

// axios.interceptors.request.use(function(config) {
//   const token = store.getState().session.token;
//   config.headers.Authorization = token;

//   return config;
// });
//localStorage.getItem("Access Token")

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  Authorization: "Bearer " + localStorage.getItem("Access Token")
};

export const getProductDetails = () => dispatch => {
  dispatch(setProductsLoading());
  axios
    .get("/explore/products/all", {
      headers
    })
    .then(res =>
      dispatch(
        {
          type: GET_PRODUCT_DETAILS,
          //payload: res.data
          payload: res.data
        }
        // ,console.log(res)
      )
    );
  //fetchProductSuccess(payload);
};

export const fetchProduct = id => dispatch => {
  axios
    .get(`/explore/products/${id}`)
    .then(res => dispatch(fetchProductSuccess(res.data)));
  // console.log(id);
};

export function fetchProductSuccess(activePost) {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: activePost
  };
}

export function fetchProductFailure(error) {
  return {
    type: FETCH_PRODUCT_FAILURE,
    payload: error
  };
}

export function resetActiveProduct() {
  return {
    type: RESET_ACTIVE_PRODUCT
  };
}

export const addProductDetails = ({ product }) => dispatch => {
  let productFormdata = new FormData();
  productFormdata.append("productName", product.productName);
  productFormdata.append("category", product.category);
  productFormdata.append("price", product.price);
  productFormdata.append("noOfUnits", product.noOfUnits);
  productFormdata.append("description", product.description);
  productFormdata.append("image", product.image);
  axios
    .post("/explore/product/add", productFormdata, {
      headers: { "Content-Type": "multipart/form-data" }
    })
    .then(res =>
      dispatch({
        type: ADD_PRODUCT_DETAILS,
        payload: res.data.catch
      })
    );
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  };
};

export const setProductsLoading = () => {
  return {
    type: PRODUCTS_LOADING
  };
};

export function fetchProductsSuccess(posts) {
  // console.log(posts);
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: posts
  };
}

export function fetchProductsFailure(error) {
  return {
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  };
}
export const setProductToCart = productId => dispatch => {
  axios
    .post(`/explore/cart/${productId}`)
    .then(res => dispatch(setProductToCartSuccess(res.data)));
};

export function setProductToCartSuccess(product) {
  // console.log(posts);
  return {
    type: SET_PRODUCT_TO_CART_SUCCESS,
    payload: product
  };
}

export function setProductToCartFailure(error) {
  return {
    type: SET_PRODUCT_TO_CART_FAILURE,
    payload: error
  };
}
