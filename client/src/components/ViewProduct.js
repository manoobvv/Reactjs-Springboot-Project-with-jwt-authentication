import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { getProductDetails } from "../actions/itemActions";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const styles = theme => ({
  root: {
    width: "90%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
    align: "center"
  },
  table: {
    minWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60
  }
});

class ViewProduct extends React.Component {
  componentDidMount() {
    this.props.getProductDetails();
  }

  render() {
    const { products } = this.props.product;
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>{""}</CustomTableCell>
              <CustomTableCell>Dessert (100g serving)</CustomTableCell>
              <CustomTableCell align="right">Calories</CustomTableCell>
              <CustomTableCell align="right">Fat (g)</CustomTableCell>
              <CustomTableCell align="right">Carbs (g)</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow className={classes.row} key={product.id}>
                <CustomTableCell component="th" scope="row">
                  <Avatar
                    alt="Remy Sharp"
                    src={product.productPictureUrl}
                    className={classes.bigAvatar}
                  />
                </CustomTableCell>
                <CustomTableCell component="th" scope="row">
                  {product.productName}
                </CustomTableCell>
                <CustomTableCell align="right">
                  {product.category}
                </CustomTableCell>
                <CustomTableCell align="right">{product.price}</CustomTableCell>
                <CustomTableCell align="right">
                  {product.noOfUnits}
                </CustomTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const mapStateToProps = state => ({
  product: state.products
});

ViewProduct.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    { getProductDetails }
  )(ViewProduct)
);

//export default withStyles(styles)(ViewProduct);
