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
    const { classes } = this.props;
    return (
        <Grid container>
          <Grid item xs>
          </Grid>
          <Grid item xs>
            <main className={classes.paper}>
              <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                User guide tool
              </Typography>
              <Typography variant="body1" color="inherit" gutterBottom>
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
