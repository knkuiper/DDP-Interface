import React, { useState } from 'react';
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

function ListCard(props) {
  const { classes } = props;

  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(SourceData);
  const [selectPlatform, setPlatform] = useState("");
  const [visibility, setVisibility] = useState("");
  const [temporality, setTemporality] = useState("");

  // exclude column list from filter
  const excludeColumns = ["id", "Elements", "Filepath"];

  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(SourceData);
    else {
      const filteredData = SourceData.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }
  console.log(data);

    return (
      <>
        <Grid container className={classes.search}>
          <TextField
            onChange={e => handleChange(e.target.value)}
            label="Search"
            value={searchText}
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
                  value={selectPlatform}
                  onChange={e => handleChange(e.target.value)}
                >
                  <FormControlLabel value="Google" control={<Radio />} label="Google" />
                  <FormControlLabel value="Facebook" control={<Radio />} label="Facebook" />
                  <FormControlLabel value="WhatsApp" control={<Radio />} label="WhatsApp" />
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
                <RadioGroup aria-label="visibility" name="visibility" value={visibility} onChange={handleChange}>
                  <FormControlLabel control={<Radio />} value="public" label="Public" />
                  <FormControlLabel control={<Radio />} value="personal" label="Personal" />
                  <FormControlLabel control={<Radio />} value="interaction" label="Interaction" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Select temporality</FormLabel>
                <FormGroup aria-label="temporality" name="temporality" value={temporality} onChange={handleChange}>
                  <FormControlLabel control={<Checkbox />} value="timestamped" label="Timestamped" />
                  <FormControlLabel control={<Checkbox />} value="timeinvariant" label="Time invariant" />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
        </div>

        <div>
          <ItemList filteredList={data} onChange={handleChange} />
        </div>
      </>
    );
  }

export default withStyles(styles)(ListCard);
