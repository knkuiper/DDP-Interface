import React, { Component } from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { Typography, Grid, Card } from '@material-ui/core';

const styles = theme => ({
  cardContainter: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  avatar: {
    margin: 10,
    backgroundColor: theme.palette.grey['200'],
    color: theme.palette.text.primary,
  },
  avatarContainer: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginBottom: theme.spacing(4)
    }
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
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
    width: '100%',
    margin: 0,
    textAlign: 'right',
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  backButton: {
    marginRight: theme.spacing(2)
  }
});

class CardItem extends Component {
  render() {
    const { classes } = this.props;
    const { title, subtitle1, subtitle2, body1, body2, button } = this.props;
    return (
      <>
        <Card className={classes.cardContainter}>
          <Grid className={classes.baseline}>
            <Grid className={classes.inline}>
              <Typography
                style={{ textTransform: 'uppercase' }}
                color='primary'
                variant="h6"
                gutterBottom
              >
                {title}
              </Typography>
              <Typography
                style={{ textTransform: 'uppercase' }}
                variant="subtitle1"
                color='primary'
                gutterBottom
              >
                {subtitle1}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
              >
                {body1}
              </Typography>
              <Typography
                style={{ textTransform: 'uppercase' }}
                variant="subtitle1"
                color='primary'
                gutterBottom
              >
                {subtitle2}
              </Typography>
              <Typography
                variant="body1"
                gutterBottom
              >
                <i>{body2}</i>
              </Typography>
            </Grid>
          </Grid>
          <Grid className={classes.inlineRight}>
            {button}
          </Grid>
        </Card>
      </>
    )
  }
}

export default withStyles(styles)(CardItem);