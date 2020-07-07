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
            <main>
              <Typography title variant="h5" color="inherit">
                User guide tool
              </Typography>
              <Typography paragraph variant="body1" color="inherit">
                <i>Insert here a guide how to use the DDP tool </i>
              </Typography>
            </main>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
    );
  }
}

export default withStyles(styles)(Userguide);
