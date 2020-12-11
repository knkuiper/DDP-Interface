import React, { Component } from 'react';
import { Typography, Grid, Card, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import _ from 'lodash';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['A500'],
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    padding: 15
  },
  cardContainter: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary
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
  handleAddFunc() {
     console.log("clicked", this.props);
     //const existingPackage = this.state.cart.filter(p => p.id === this.props.id);
  };

  render() {
    const { classes } = this.props;
    //const preventDefault = (event) => event.preventDefault();

    return (
      <>
        <div key={this.props.id}>
          <CssBaseline />
          <Grid container className={classes.root}>
            <Grid item xs={12} sm={12} md={12}>
              <Card className={classes.cardContainter}>
                <Grid className={classes.inline}>
                  <Grid className={classes.inlineRight}>
                    <Button
                      aria-label="save"
                      size="small"
                      variant="contained"
                      color="primary"
                      startIcon={<AddIcon />}
                      onClick={this.handleAddFunc.bind(this)}
                    >
                      Save
                    </Button>
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
                      [classes.expandOpen]: this.state[`expanded_${this.props.id}`] || false,
                    })}
                    onClick={this.handleExpandClick.bind(this,this.props.id)}
                    aria-expanded={this.state[`expanded_${this.props.id}`] || false}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon/>
                  </IconButton>
                </Grid>
                <Grid className={classes.inline}>
                  <Collapse in={this.state[`expanded_${this.props.id}`] || false} timeout="auto" unmountOnExit>
                    <Typography variant="body1" gutterBottom>
                      <b>Visibility:</b> {this.props.Visibility}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      <b>Temporality:</b> {this.props.Temporality}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      <b>Filepath:</b> {/*<Link href="#" onClick={preventDefault}> */}
                      {this.props.Filepath} {/*</Link> */}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      <b>Elements:</b> {this.props.Elements}
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      <b>Example record:</b>
                    </Typography>
                    <div>
                      <img alt="example_record" src={this.props.Example_screenshot} width="1000"/>
                    </div>
                  </Collapse>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </div>
      </>
    )
  }
}

export default withStyles(styles)(Item);
