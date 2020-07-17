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

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
        <Grid container>
          <Grid item xs>
          </Grid>
          <Grid item xs>
            <main className={classes.paper}>
              <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                About Data Download Package Manager
              </Typography>
              <Typography variant="body1" color="inherit" gutterBottom>
                This a webpage is a resource for social science researchers looking to
                know more about data download packages from various social media platforms.
                Data from data download packages can be used in social and behavioural research.
                If you have any trouble using the tool or have any questions, please contact us at:
              </Typography>
            </main>
          </Grid>
          <Grid item xs>
          </Grid>
        </Grid>
    );
  }
}

export default withStyles(styles)(About);
