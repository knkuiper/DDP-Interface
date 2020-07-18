import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';

const styles = theme => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
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
    width: '30%',
    textAlign: 'right',
    marginLeft: 50,
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0,
      textAlign: 'center'
    }
  },
  textItem: {
    marginBottom: 30,
    marginTop: 10
  }
});

class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.paper}>
        <div className={classes.itemContainer}>
          <div className={classes.baseline}>
            <div className={classes.inline}>
              <Typography
                style={{ textTransform: 'uppercase' }}
                color='secondary'
              gutterBottom>
                About Data Download Package Manager
              </Typography>
              <Typography
                className={classes.textItem}
                variant="body1"
                color="inherit"
                gutterBottom
              >
                This a webpage is a resource for social science researchers looking to
                know more about data download packages from various social media platforms.
                Data from data download packages can be used in social and behavioural research.
                If you have any trouble using the tool or have any questions, please contact us at:
              </Typography>
              <Typography
                style={{ textTransform: 'uppercase' }}
                color='secondary'
                gutterBottom
              >
                User guide tool
              </Typography>
              <Typography
                className={classes.textItem}
                variant="body1"
                color="inherit"
                gutterBottom
              >
                <i>Insert here a guide how to use the DDP tool </i>
              </Typography>
            </div>
          </div>
          {/* <div className={classes.inlineRight}>
          </div> */}
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(About);
