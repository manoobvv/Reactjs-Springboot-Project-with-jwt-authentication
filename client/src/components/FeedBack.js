import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  tabsRoot: {
    borderBottom: "1px solid #e8e8e8"
  },
  tabsIndicator: {
    backgroundColor: "#1890ff"
  },
  tabRoot: {
    textTransform: "initial",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing.unit * 4,
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:hover": {
      color: "#40a9ff",
      opacity: 1
    },
    "&$tabSelected": {
      color: "#1890ff",
      fontWeight: theme.typography.fontWeightMedium
    },
    "&:focus": {
      color: "#40a9ff"
    }
  },
  tabSelected: {},
  typography: {
    padding: theme.spacing.unit * 3
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Tabs
            // value={value}
            // onChange={this.handleChange}
            classes={{
              root: classes.tabsRoot,
              indicator: classes.tabsIndicator
            }}
          >
            <Tab
              // disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Tab fhgkjlk1"
            />
            <Tab
              // disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Tab dsgfhhjk2"
            />
            <Tab
              // disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Tab dsgfhhjk2"
            />
            <Tab
              // disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Tab dsgfhhjk2"
            />
            <Tab
              // disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Tab dsgfhhjk2"
            />
            <Tab
              // disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Tab dsgfhhjk2"
            />
            <Tab
              // disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Tab dsgfhhjk2"
            />
            <Tab
              // disableRipple
              classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
              label="Tab dsgfhhjk2"
            />
          </Tabs>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
