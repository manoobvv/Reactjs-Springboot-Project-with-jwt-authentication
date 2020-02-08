import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Admin from "./Admin";
import ViewProduct from "./ViewProduct";
import { blue } from "@material-ui/core/colors";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 6,
    color: blue,
    fontSize: 11
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  }
});

class AdminTab extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs value={value} onChange={this.handleChange}>
          <Tab className={classes.head} label="Add Products" />
          <Tab className={classes.head} label="View Products" />
          <Tab className={classes.head} label="Update Products" />
        </Tabs>
        {value === 0 && (
          <TabContainer>
            <Admin />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <ViewProduct />
          </TabContainer>
        )}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
      </div>
    );
  }
}

AdminTab.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AdminTab);
