import React, { Component } from 'react';
import {
  Grid,
  TextField
 } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SourceData from '../data/index_v2.json';
import SearchIcon from '@material-ui/icons/Search';
import FilterButtons from '../buttons/FilterButtons.js';
import ItemList from "../layouts/ItemList.js";
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

class ListCardTesting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: SourceData,
      search: '',
      selection: '',
      expanded: false
    }
  }
  updateSearch(e) {
    this.setState({ search: e.target.value })
  };
  updateFiltering(e) {
    this.setState({ selection: e.target.value })
  };
  handleExpandClick(id) {
      this.setState({ [`expanded_${id}`]: _.isUndefined(this.state[`expanded_${id}`])?true: !this.state[`expanded_${id}`] });
  };

  render(){
    const { classes } = this.props;
    let filteredList = this.state.list.filter((item) => {
      return item.Tags.some((Tags) => Tags.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
    });

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
        <FilterButtons
          onChange={this.updateFiltering.bind(this)}
          label="Filter"
          value={this.state.selection}
        />
        <div>
          <ItemList filteredList={filteredList} />
        </div>
      </>
    );
  }
}

export default withStyles(styles)(ListCardTesting);
