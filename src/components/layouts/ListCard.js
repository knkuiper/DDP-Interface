import React, { Component } from 'react';
import {
  Grid,
  TextField
 } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SourceData from '../data/index_v4.json';
import SearchIcon from '@material-ui/icons/Search';
//import FilterButtons from '../buttons/FilterButtons.js';
import ItemList from "../layouts/ItemList.js";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
  constructor() {
    super();
    this.state = {
      list: SourceData,
      search: '',
      select_platform: '',
    };
  }
  // updateSearch(e) {
  //   this.setState({ search: e.target.value })
  //   console.log(e.target.value)
  // };
  updateFiltering = e => {
    const value = e.target.value;
    //const platform = e.Platform;
    this.setState({ search: value });
    //this.setState({ select_platform: e.target.value })
    console.log(value);
  };

  render(){
    const { classes } = this.props;

    var searchValue = this.state.search.toLowerCase();

    let filterResults = this.state.list.filter(item => {
      return (
        // Search for the tags used
        //item.Tags.some(Tags => Tags.toLowerCase().search(searchValue) !== -1) //||

        // Code to search for any words found in the objects
        Object.keys(item).some(key => item[key].toString().search(searchValue) !== -1)

        //item.Platform === this.state.select_platform
      );
    });

    // if (this.state.search && this.state.select_platform) {
    //   filterResults = filterResults.filter(item => {
    //     return (
    //       item.search === item.Tags.some(Tags => Tags.toLowerCase().indexOf(this.state.search.toLowerCase())) //&&
    //       //item.Platform.some(Platform === Platform.toLowerCase().indexOf(this.state.select_platform))
    //     );
    //   });
    // }


    //console.log(filterResults[0].Platform + " " + filterResults[0].Tags);

    return (
      <>
        <Grid container className={classes.search}>
          <TextField
            onChange={this.updateFiltering}
            label="Search"
            value={this.state.search}
          />
          <SearchIcon />
        </Grid>
        {/* <FilterButtons
          onChange={this.updateFiltering.bind(this)}
          label="Filter"
          value={this.state.selection}
        /> */}

        <div className={classes.root}>
          <Grid container justify="center">
            <Grid item>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Select platform</FormLabel>
                <RadioGroup
                  aria-label="select_platform"
                  name="select_platform"
                  value={this.state.select_platform}
                  onChange={this.updateFiltering}
                >
                  {/*<FormControlLabel value="Google" control={<Radio />} label="Google" />*/}
                  <FormControlLabel value="Facebook" control={<Radio />} label="Facebook" />
                  <FormControlLabel value="Whatsapp" control={<Radio />} label="Whatsapp" />
                  <FormControlLabel value="Instagram" control={<Radio />} label="Instagram" />
                  {/* <FormControlLabel value="uber" control={<Radio />} label="Uber" />
                    <FormControlLabel value="apple" control={<Radio />} label="Apple" />
                    <FormControlLabel value="netflix" control={<Radio />} label="Netflix" />
                    <FormControlLabel value="microsoft" control={<Radio />} label="Microsoft" />
                    <FormControlLabel value="twitter" control={<Radio />} label="Twitter" />
                  <FormControlLabel value="linkedin" control={<Radio />} label="LinkedIn" /> */}
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Select visibility</FormLabel>
                <RadioGroup aria-label="visibility" name="visibility" value={this.value} onChange={this.updateFiltering}>
                  <FormControlLabel value="public" control={<Radio />} label="Public" />
                  <FormControlLabel value="personal" control={<Radio />} label="Personal" />
                  <FormControlLabel value="interaction" control={<Radio />} label="Interaction" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Select temporality</FormLabel>
                <FormGroup aria-label="temporality" name="temporality" value={this.value} onChange={this.updateFiltering}>
                  <FormControlLabel value="timestamped" control={<Checkbox  />} label="Timestamped" />
                  <FormControlLabel value="time invariant" control={<Checkbox />} label="Time invariant" />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
        </div>

        <div>
          <ItemList filteredList={filterResults} onChange={this.updateFiltering} />
        </div>
      </>
    );
  }
}

export default withStyles(styles)(ListCard);
