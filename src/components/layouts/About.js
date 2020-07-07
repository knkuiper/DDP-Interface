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
    return (

        <Grid container style={{padding: 20}} >
          <Grid item xs>
          </Grid>
          <Grid item xs>
            <main>
              <Typography variant="h5" color="inherit">
                About Data Download Package Manager
              </Typography>
              <Typography paragraph variant="body1" color="inherit">
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
