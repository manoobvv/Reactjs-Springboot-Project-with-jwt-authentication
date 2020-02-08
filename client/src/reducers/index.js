import { combineReducers } from "redux";
import itemReducer from "./itemReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

export default combineReducers({
  // item: itemReducer,
  products: productReducer,
  cart: cartReducer,
  user: userReducer
});
