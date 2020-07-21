import React, { Component } from "react";
import { Grid } from '@material-ui/core';
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardItem from '../layouts/CardItem';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"],
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 20,
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    width: 1000
  }
});

class AboutCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <CssBaseline />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={10}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12}>
                <CardItem
                  title="About Data Download Package Manager"
                  body1="This a webpage is a resource for social science researchers looking to
                  know more about data download packages from various social media platforms.
                  Data from data download packages can be used in social and behavioural research.
                  If you have any trouble using the tool or have any questions, please contact us at:"
                  subtitle2="User guide tool"
                  body2="Insert here a guide how to use the DDP tool "
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(AboutCard);
