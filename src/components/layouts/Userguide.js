import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const styles = {
  paper: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
  },
};

class Userguide extends Component {
  render() {
    return (
        <Grid container style={{padding: 20}} >
          <Grid item xs>
          </Grid>
          <Grid item xs>
            <Typography variant="h5" color="inherit">
            User guide tool
            </Typography>
            <Typography variant="body1" color="inherit">

            </Typography>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
    );
  }
}

export default withStyles(styles)(Userguide);
