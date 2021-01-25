import React, { Component } from "react";
import { Grid, Typography, Card } from '@material-ui/core';
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";

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
    width: 1200
  },
  cardContainter: {
    padding: theme.spacing(3),
    marginTop: 20,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  baseline: {
    alignSelf: 'baseline',
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: 0
    }
  },
  inline: {
    display: 'inline-block',
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  inlineRight: {
    width: '100%',
    margin: 0,
    textAlign: 'right',
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  }
}); 

class UsertoolCard extends Component {
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
                <Card className={classes.cardContainter}>
                  <Grid className={classes.baseline}>
                    <Grid className={classes.inline}>
                      <Typography
                        style={{ textTransform: 'uppercase' }}
                        color='primary'
                        variant="h6"
                        gutterBottom
                      >
                        User guide tool
                      </Typography>
                      <Typography variant="body1"
                        gutterBottom>
                        This tool allows researchers to find information about the 
                        various social media data packages and how to use the information from these 
                        packages in their research. On the home page you can search for concepts 
                        and use the extra filter buttons to filter the search further. By pressing 
                        the add package button the selected package is added into the 'My packages 
                        folder'. On this page, an overview of the chosen packages and information 
                        can be downloaded to your own computer.
                      </Typography>
                    </Grid> 
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(UsertoolCard);
