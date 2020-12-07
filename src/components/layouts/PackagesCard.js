import React, { Component } from "react";
import { Grid } from '@material-ui/core';
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import DownloadButton from '../buttons/DownloadButton';
import CardItem from "../layouts/CardItem";

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
  },
  inlineRight: {
    width: '30%',
    textAlign: 'right',
    marginLeft: 50,
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0,
      textAlign: 'center'
    }
  }
});

class PackagesCard extends Component {
  state = {
      cart: [{
        id: 4,
        file: "test",
        description: "this is a test",
        units: 3
      }]
  }

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
                  className={classes.card}
                  title="Saved packages"
                  subtitle1="Data"
                  body1={this.state.cart.map((c) => { return <div> Will show a list of the packages saved
                    to be downloaded. {c.file} {c.units} </div>})}
                  subtitle2="Amount"
                  body2="Shows the number of saved packages to be downloaded."
                  button=<DownloadButton />
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(PackagesCard);
