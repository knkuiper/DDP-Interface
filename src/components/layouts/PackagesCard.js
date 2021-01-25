import React, { Component } from "react";
import { Grid, Typography, Card } from '@material-ui/core';
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import DownloadButton from '../buttons/DownloadButton';

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
                <Card className={classes.cardContainter}>
                  <Grid className={classes.baseline}>
                    <Grid className={classes.inline}>
                      <Typography gutterBottom
                        style={{ textTransform: 'uppercase' }}
                        color='primary'
                        variant="h6"
                      >
                        Saved packages
                      </Typography>
                      <Typography gutterBottom                        
                        style={{ textTransform: 'uppercase' }}
                        color='primary'
                      >
                        Data
                      </Typography>
                     <Typography gutterBottom>
                        {this.state.cart.map((c) => {
                          return <div key={c.id}> Will show a list of the packages saved
                          to be downloaded. {/*  {c.file} {c.units} */} </div>
                        })}
                      </Typography> 
                      <Typography
                        style={{ textTransform: 'uppercase' }}
                        color='primary'
                        gutterBottom
                      >
                        Amount
                      </Typography>
                      <Typography variant="body1"
                        gutterBottom>
                        Shows the number of saved packages to be downloaded.
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid className={classes.inlineRight}>
                    <DownloadButton />
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

export default withStyles(styles)(PackagesCard);
