import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import { getProductDetails } from "../actions/itemActions";
import { bindActionCreators } from "redux";
import {
  fetchProducts,
  fetchProductsSuccess,
  fetchProductsFailure
} from "../actions/itemActions";

import { connect } from "react-redux";
import "./styles.scss";
import { Link } from "react-router-dom";

const styles = theme => ({});

class Album extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, loading, error } = this.props.products;

    return (
      <React.Fragment>
        <CssBaseline />
        <main>
          <div className="row mt-3">
            {products.map(product => (
              <div className="col-sm-6 col-md-3">
                <div className="product">
                  <img className="productimg" src={product.productPictureUrl} />
                  <div className="stats">
                    <div className="stats-container">
                      <span className="product_price">{product.price}</span>
                      <span className="product_name">
                        <Link to={"/explore/" + product.id}>
                          {product.productName}
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
        {/* Footer */}
        {/* <footer className={classes.footer} sm={12}>
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Something here to give the footer a purpose!
          </Typography>
        </footer> */}
        {/* End footer */}
      </React.Fragment>
    );
  }
}

Album.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    products: state.products.postsList
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchProducts,
      fetchProductsSuccess,
      fetchProductsFailure
    },
    dispatch
  );

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps

    //   fetchProductsSuccess,
    //   fetchProductsFailure
    // }
  )(Album)
);
