import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Grid from "@material-ui/core/Grid";

import {
  fetchCartProducts,
  fetchCartProductsFailure,
  fetchCartProductsSuccess
} from "../actions/cartActions";

class Shoppingcart extends Component {
  componentDidMount() {
    this.props.fetchCartProducts();
  }
  render() {
    const { products, loading, error } = this.props.products;
    return (
      <div className="row mt-3">
        {products.map(product => (
          <div className="col-sm-6 col-md-3">
            <div className="product">
              <img className="cartProductImg" src={product.productPictureUrl} />
            </div>
          </div>

          //   <div>
          //     {products.map(product => (
          //       <div className="col-sm-6 col-md-3">
          //         <div className="product ">
          //           <div>
          //             <img
          //               className="cartProductImg"
          //               src={product.productPictureUrl}
          //             />
          //           </div>
          //           {/* <div className="col-sm-4">
          //           <div> {product.productName}</div>
          //           {product.category}
          //           {product.price}
          //           {product.noOfUnits}
          //           {product.description}
          //         </div> */}
          //           {/* <div className="image_overlay" /> */}
          //           {/* <div className="stats">
          //                 <div className="stats-container">
          //                   <span className="product_price">{product.price}</span>
          //                   <span className="product_name">
          //                     <Link to={"/explore/" + product.id}>
          //                       {product.productName}
          //                     </Link>
          //                   </span>
          //                 </div>
          //               </div> */}
          //         </div>
          //       </div>
          //     ))}
          //   </div>
        ))}
        ;
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.cart.fetchCartList
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchCartProducts,
      fetchCartProductsSuccess,
      fetchCartProductsFailure
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Shoppingcart);
