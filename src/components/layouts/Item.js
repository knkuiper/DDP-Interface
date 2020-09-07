import React, { Component } from 'react';
import {
  Typography,
  Grid,
  Card
 } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import AddButton from '../buttons/AddButton';
import _ from 'lodash';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"],
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    padding: 15
  },
  grid: {
    width: 1000,
  },
  cardContainter: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  search: {
    margin: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.primary
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
  inline: {
    marginBottom: 0,
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2 ),
      marginLeft: 0
    }
  },
  inlineRight: {
    width: '100%',
    textAlign: 'right',
    margin: 0,
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
});

class Item extends Component {
  state = {
    expanded: false
  };
  handleExpandClick(id) {
      this.setState({[`expanded_${id}`]: _.isUndefined(this.state[`expanded_${id}`])?true: !this.state[`expanded_${id}`] });
  };

  render() {
    const { classes } = this.props;

    let expanded = this.state.expanded;

    return (
      <>
        <div key={this.props.id}>
          <CssBaseline />
          <div className={classes.root}>
            <Grid container justify="center" className={classes.test}>
              <Grid
                container
                spacing={10}
                alignItems="center"
                justify="center"
                className={classes.grid}
              >
                <Grid item xs={12} md={12}>
                  <Card className={classes.cardContainter}>
                    <Grid className={classes.inline}>
                      <Grid className={classes.inlineRight}>
                        <AddButton />
                      </Grid>
                      <Typography
                        style={{ textTransform: 'uppercase' }}
                        color='primary'
                        gutterBottom
                      >
                        {this.props.Platform} {this.props.File}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <b>Platform:</b> {this.props.Platform}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <b>File:</b> {this.props.File}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <b>File format:</b> {this.props.File_format}
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        <b>Description:</b> {this.props.Description}
                      </Typography>
                    </Grid>
                    <Grid className={classes.inlineRight}>
                      <IconButton
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: expanded,
                        })}
                        onClick={this.handleExpandClick.bind(this,this.props.id)}
                        aria-expanded={this.state[`expanded_${this.props.id}`] || false}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    </Grid>
                    <Grid className={classes.inline}>
                      <Collapse in={this.state[`expanded_${this.props.id}`] || false} timeout="auto" unmountOnExit>
                        <Typography variant="body1" gutterBottom>
                          <b>Filepath:</b> {this.props.Filepath}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          <b>Elements:</b> {this.props.Elements}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                          <b>Example record:</b>
                        </Typography>
                        <div>
                          <img alt="example_record" src={this.props.Example_screenshot} width="800" />
                        </div>
                      </Collapse>
                    </Grid>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </div>
      </>
    )
  }
}

export default withStyles(styles)(Item);
