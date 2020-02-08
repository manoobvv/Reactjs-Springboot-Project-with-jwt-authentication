import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { connect } from "react-redux";
import { addProductDetails } from "../actions/itemActions";
import List from "@material-ui/core/List";
const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: 60,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16,
    marginLeft: 100
  },
  menu: {
    width: 200
  }
});

class Admin extends React.Component {
  state = {
    productDetails: {
      productName: "",
      category: "",
      price: "",
      noOfUnits: "",
      description: "",
      image: ""
    },
    images: ""
  };

  //   handleChange = (event) => {
  //     const target = event.target;
  //     const value = target.type === 'file' ? event.target.files[0] : target.value;
  //     const name = target.name;
  //     this.setState({
  //       productDetails: {
  //         [name]: value
  //       }
  //     });
  // };

  handleChange = name => ({ target: { value } }) => {
    // console.log(value);

    this.setState({
      productDetails: {
        ...this.state.productDetails,
        [name]: value
      }
    });
  };

  fileChangedHandler = event => {
    // let uploadPic = event.target.files[0];
    // this.setState({ images: uploadPic });
    //console.log(event.target.type);
    this.setState({
      productDetails: {
        ...this.state.productDetails,
        image: event.target.files[0]
      }
    });
  };

  handleSubmit = event => {
    // var formData = new FormData();
    // formData.append("category", this.state.productDetails.category);
    // formData.append("productName", this.state.productDetails.productName);
    // formData.append("price", this.state.productDetails.price);
    // formData.append("noOfUnits", this.state.productDetails.noOfUnits);
    // formData.append("description", this.state.productDetails.description);
    //  formData.append("selectedFile", this.state.selectedFile);

    // Display the key/value pairs
    // for (var pair of formData.entries()) {
    //   console.log(pair);
    // }

    event.preventDefault();
    // const formData = {};
    // for (const field in this.refs) {
    //   formData[field] = this.refs[field].value;
    // }
    // console.log("-->", formData);

    const newDetails = {
      product: this.state.productDetails
    };
    console.log(newDetails);
    this.props.addProductDetails(newDetails);
  };

  render() {
    const { classes } = this.props;
    const {
      productDetails: {
        productName,
        category,
        price,
        noOfUnits,
        description,
        image
      }
    } = this.state;

    return (
      <form
        encType="multipart/form-data"
        onSubmit={this.handleSubmit}
        // className={classes.container}
        noValidate
        autoComplete="off"
      >
        <List>
          <TextField
            id="outlined-name"
            label="Name of the Product"
            className={classes.textField}
            ref="productName"
            value={productName}
            onChange={this.handleChange("productName")}
            margin="normal"
            variant="outlined"
            style={{ width: 500 }}
          />
        </List>
        <List>
          <TextField
            id="outlined-name"
            label="Product Category"
            className={classes.textField}
            value={category}
            onChange={this.handleChange("category")}
            margin="normal"
            variant="outlined"
          />
        </List>
        <List>
          <TextField
            id="outlined-name"
            label="Product Price"
            className={classes.textField}
            value={price}
            onChange={this.handleChange("price")}
            margin="normal"
            variant="outlined"
          />
        </List>
        <List>
          <TextField
            id="outlined-name"
            label="Total units of product"
            className={classes.textField}
            value={noOfUnits}
            onChange={this.handleChange("noOfUnits")}
            margin="normal"
            variant="outlined"
          />
        </List>
        <List>
          <TextField
            id="outlined-name"
            label="Total units of product"
            className={classes.textField}
            value={description}
            onChange={this.handleChange("description")}
            margin="normal"
            variant="outlined"
          />
        </List>
        <input
          type="file"
          name="image"
          //value={this.state.images}
          onChange={this.fileChangedHandler}
        />
        <List />
        {/* <input ref="phone" className="phone" type="tel" name="phone" />
        <input ref="email" className="email" type="tel" name="email" /> */}
        <Button
          type="submit"
          variant="contained"
          size="small"
          className={classes.button}
        >
          <SaveIcon
            className={classNames(classes.leftIcon, classes.iconSmall)}
          />
          Save
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product
});

Admin.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(mapStateToProps, { addProductDetails })(Admin)
);

// export default withStyles(styles)(Admin);
