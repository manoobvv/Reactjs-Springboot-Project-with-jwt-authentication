import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./styles.scss";
import { connect } from "react-redux";
import {
  fetchProduct,
  fetchProductFailure,
  fetchProductSuccess,
  resetActiveProduct,
  setProductToCart,
  setProductToCartSuccess,
  setProductToCartFailure
} from "../actions/itemActions";
import { bindActionCreators } from "redux";
class Checkout extends Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.name);
  }

  // componentWillUnmount() {
  //   this.props.resetMe();
  // }

  handleAddToCart(product) {
    this.props.setProductToCart(product);
  }

  render() {
    const { product, loading, error } = this.props.product;

    // const { post, loading, error } = this.props.activePost;
    // if (loading) {
    //   return <div className="container">Loading...</div>;
    // } else if (error) {
    //   return <div className="alert alert-danger">{error.message}</div>;
    // } else if (!post) {
    //   return <span />;
    // }

    return (
      <Grid container justify="center">
        {product ? (
          <Grid container item xs={5} className="product">
            <Grid container justify="center">
              <img
                className="checkoutproductimg"
                src={product.productPictureUrl}
              />
              {/* <div className="image_overlay">
                <div className="stats">
                  <div className="stats-container">
                    <span className="">{product.price}</span>
                    <span className="">{product.productName}</span>
                  </div>
                </div>
              </div> */}
            </Grid>
            <Grid>
              <Button
                variant="contained"
                className="buttonAddToCart"
                onClick={() => this.handleAddToCart(product.id)}
              >
                Add To Cart
              </Button>

              <Button
                variant="contained"
                color="secondary"
                className="buttonBuyNow"
              >
                Buy Now
              </Button>
            </Grid>
          </Grid>
        ) : (
          "not"
        )}
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProduct,
      fetchProductSuccess,
      fetchProductFailure,
      setProductToCart,
      setProductToCartSuccess,
      setProductToCartFailure
    },
    dispatch
  );

const mapStateToProps = state => {
  return {
    product: state.products.activeProduct
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

//export default Checkout;
