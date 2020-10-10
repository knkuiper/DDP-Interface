import React, { useState } from 'react';
import {
  Grid,
  TextField
 } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SourceData from '../data/index_v4_new.json';
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
    padding: 15,
  },
  search: {
    margin: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.primary
  },
  filter: {
    margin: 10,
    padding: 10,
    width: '15%'
  },
  itemContainer: {
    margin: 10,
    padding: 10,
    width: '80%'
  }
});

function ListCard(props) {
  const { classes } = props;

  const [data] = useState(SourceData);
  //filterstate for text and buttons
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState(new Set());

  // exclude column list from filter
  const excludeColumns = ["id", "Elements", "Filepath"];

  const handleInputChange = (value) => {
    setSearchText(value);
    //filterData(value);
  };

  const filterClick = (value) => {
     if (filter.has(value)) {
       setFilter(prevFilter => {
         const newSet = new Set(prevFilter);
         newSet.delete(value);
         return newSet;
       });
     } else {
        setFilter(prevFilter => {
         const newSet = new Set(prevFilter);
         newSet.add(value);
         return newSet;
       });
     }
   };

  let filteredData = data.filter(item => {
    if (filter.size > 0 && !(filter.has(item.Platform)) && !(filter.has(item.Visibility)) && !(filter.has(item.Temporality)))
      return false;

    if (searchText.length > 0 && !(Object.keys(item).some(key => excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(searchText.toLowerCase().trim()))))
       return false;

    return true;
  });

  // const filterData = (value) => {
  //   const lowercasedValue = value.toLowerCase().trim();
  //   if (filter.size > 0 && !filter.has(data.Platform))
  //     return false;
  //   if ((searchText.length > 0 && )
  //   else {
  //     const filteredData = data.filter(item => {
  //       return Object.keys(item).some(key =>
  //         excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
  //       );
  //     });
  //     setData(filteredData);
  //   }
  // }
  // console.log(data);

  console.log(searchText);
  console.log(filteredData.length);

  return (
    <>
      <Grid container
        spacing={3}
        className={classes.root}
      >
        <Grid container className={classes.search}>
          <TextField
            onChange={(e) => handleInputChange(e.target.value)}
            label="Search"
            value={searchText}
          />
          <SearchIcon />
        </Grid>
        <Grid item className={classes.filter}>
          <FormControl component="fieldset" className={classes.formControl}>
            <Grid item>
              <FormLabel component="legend">Select platform</FormLabel>
              <RadioGroup
                aria-label="platform"
                name="platform"
                onChange={(e) => filterClick(e.target.value)}
                value={filter}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label="Google"
                  checked={filter.has("Google")}
                  onChange={(e) => filterClick("Google")}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Facebook"
                  checked={filter.has("Facebook")}
                  onChange={(e) => filterClick("Facebook")}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="WhatsApp"
                  checked={filter.has("WhatsApp")}
                  onChange={(e) => filterClick("WhatsApp")}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Instagram"
                  checked={filter.has("Instagram")}
                  onChange={(e) => filterClick("Instagram")}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Uber"
                  checked={filter.has("Uber")}
                  onChange={(e) => filterClick("Uber")}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Apple"
                  checked={filter.has("Apple")}
                  onChange={(e) => filterClick("Apple")}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Netflix"
                  checked={filter.has("Netflix")}
                  onChange={(e) => filterClick("Netflix")}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Microsoft"
                  checked={filter.has("Microsoft")}
                  onChange={(e) => filterClick("Microsoft")}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Twitter"
                  checked={filter.has("Twitter")}
                  onChange={(e) => filterClick("Twitter")}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="LinkedIn"
                  checked={filter.has("LinkedIn")}
                  onChange={(e) => filterClick("LinkedIn")}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Snapchat"
                  checked={filter.has("Snapchat")}
                  onChange={(e) => filterClick("Snapchat")}
                />
              </RadioGroup>
            </Grid>
            <Grid item>
              <FormLabel component="legend">Select visibility</FormLabel>
              <FormGroup
                aria-label="visibility"
                name="visibility"
                onChange={(e) => filterClick(e.target.value)}
                value={filter}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label="Platform"
                  checked={filter.has("Platform")}
                  onChange={(e) => filterClick("Platform")}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Personal"
                  checked={filter.has("Personal")}
                  onChange={(e) => filterClick("Personal")}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Interaction"
                  checked={filter.has("Interaction")}
                  onChange={(e) => filterClick("Interaction")}
                />
              </FormGroup>
            </Grid>
            <Grid item>
              <FormLabel component="legend">Select temporality</FormLabel>
              <FormGroup
                aria-label="temporality"
                name="temporality"
                onChange={e => filterClick(e.target.value)}
                value={filter}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label="Timestamped"
                  checked={filter.has("Timestamped")}
                  onChange={(e) => filterClick("Timestamped")}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Time invariant"
                  checked={filter.has("Time invariant")}
                  onChange={(e) => filterClick("Time invariant")}
                />
              </FormGroup>
            </Grid>
          </FormControl>
        </Grid>
        <Grid item className={classes.itemContainer}>
          <ItemList filteredList={filteredData} key={filteredData.id}/>
          {filteredData.length === 0 && <div>Found nothing! Please try again with a different search term.</div>}
        </Grid>
      </Grid>
    </>
  );
}

export default withStyles(styles)(ListCard);
