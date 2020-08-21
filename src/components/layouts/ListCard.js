import React, { Component } from 'react';
import {
  Typography,
  Grid,
  Card,
  TextField
 } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import clsx from 'clsx';
import SourceData from '../data/index_v1.json';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import AddButton from '../buttons/AddButton';
import FilterButtons from '../buttons/FilterButtons.js'

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

class ListCard extends Component {
  state = {
    expanded: false,
    search: '',
  };
  updateSearch(e) {
    this.setState({search: e.target.value})
  }
  handleExpandClick = () => {
      this.setState({expanded: !this.state.expanded})
  };
  render(){
    const { classes } = this.props;
    let filteredList = SourceData.filter(
      (value) => {
        return value.Platform.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    let expanded = this.state.expanded;

    return (
      <>
        <Grid container className={classes.search}>
          <TextField
            onChange={this.updateSearch.bind(this)}
            label="Search"
            value={this.state.search}
          />
          <SearchIcon />
        </Grid>
        <FilterButtons />
        <div>
          {filteredList.map(value =>
            <div key={value.id}>
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
                            {value.Platform} {value.File}
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            <b>Platform:</b> {value.Platform}
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            <b>File:</b> {value.File}
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            <b>File format:</b> {value.File_format}
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                            <b>Description:</b> {value.Description}
                          </Typography>
                        </Grid>
                        <Grid disableSpacing className={classes.inlineRight}>
                          <IconButton
                            className={clsx(classes.expand, {
                              [classes.expandOpen]: expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                          >
                            <ExpandMoreIcon />
                          </IconButton>
                        </Grid>
                        <Grid className={classes.inline}>
                          <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <Typography variant="body1" gutterBottom>
                              <b>Filepath:</b> {value.Filepath}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                              <b>Example record:</b> {value.Example_record}
                            </Typography>
                          </Collapse>
                        </Grid>
                      </Card>
                  </Grid>
                </Grid>
              </Grid>
            </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default withStyles(styles)(ListCard);
