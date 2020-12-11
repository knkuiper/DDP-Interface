import React, { useState } from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SourceData from '../data/index_v4_new.json';
import SearchIcon from '@material-ui/icons/Search';
import ItemList from "./ItemList.js";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  root: {
    padding: 15
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

function ExploreList(props) {
  const { classes } = props;

  const [data] = useState(SourceData);

  const [searchText, setSearchText] = useState("");
  //const [filter, setFilter] = useState(new Set());
  const [filterPlatform, setFilterPlatform] = useState(new Set());
  const [filterVisibility, setFilterVisibility] = useState(new Set());
  const [filterTemporality, setFilterTemporality] = useState(new Set());

  // exclude column list from filter
  const excludeColumns = ["id", "Elements", "Filepath", "Visibility", "Timestamped"];

  const handleInputChange = (value) => {
    setSearchText(value);
  };

  const filterClickPlatform = (value) => {
     if (filterPlatform.has(value)) {
       setFilterPlatform(prevFilter => {
         const newSet = new Set(prevFilter);
         newSet.delete(value);
         return newSet;
       });
     } else {
        setFilterPlatform(prevFilter => {
         const newSet = new Set(prevFilter);
         newSet.add(value);
         return newSet;
       });
     }
   };

   const filterClickVisibility = (value) => {
      if (filterVisibility.has(value)) {
        setFilterVisibility(prevFilter => {
          const newSet = new Set(prevFilter);
          newSet.delete(value);
          return newSet;
        });
      } else {
         setFilterVisibility(prevFilter => {
          const newSet = new Set(prevFilter);
          newSet.add(value);
          return newSet;
        });
      }
    };

    const filterClickTemporality = (value) => {
       if (filterTemporality.has(value)) {
         setFilterTemporality(prevFilter => {
           const newSet = new Set(prevFilter);
           newSet.delete(value);
           return newSet;
         });
       } else {
          setFilterTemporality(prevFilter => {
           const newSet = new Set(prevFilter);
           newSet.add(value);
           return newSet;
         });
       }
     };

   let filteredData = data.filter(item => {
     if (filterPlatform.size > 0 && !(filterPlatform.has(item.Platform)))
        return false;

     if (filterVisibility.size > 0 && !(filterVisibility.has(item.Visibility)))
        return false;

     if (filterTemporality.size > 0 && !(filterTemporality.has(item.Temporality)))
        return false;

     if (searchText.length > 0 && !(Object.keys(item).some(key => excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(searchText.toLowerCase().trim()))))
        return false;

     return true;
   });

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
                <FormLabel component="legend">
                  Select platform
                  <IconButton color="primary" size="small">
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </FormLabel>
                <FormGroup
                  aria-label="platform"
                  name="platform"
                  onChange={(e) => filterClickPlatform(e.target.value)}
                  value={filterPlatform}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Google"
                    checked={filterPlatform.has("Google")}
                    onChange={(e) => filterClickPlatform("Google")}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Facebook"
                    checked={filterPlatform.has("Facebook")}
                    onChange={(e) => filterClickPlatform("Facebook")}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="WhatsApp"
                    checked={filterPlatform.has("WhatsApp")}
                    onChange={(e) => filterClickPlatform("WhatsApp")}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Instagram"
                    checked={filterPlatform.has("Instagram")}
                    onChange={(e) => filterClickPlatform("Instagram")}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Uber"
                    checked={filterPlatform.has("Uber")}
                    onChange={(e) => filterClickPlatform("Uber")}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Apple"
                    checked={filterPlatform.has("Apple")}
                    onChange={(e) => filterClickPlatform("Apple")}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Netflix"
                    checked={filterPlatform.has("Netflix")}
                    onChange={(e) => filterClickPlatform("Netflix")}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Microsoft"
                    checked={filterPlatform.has("Microsoft")}
                    onChange={(e) => filterClickPlatform("Microsoft")}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Twitter"
                    checked={filterPlatform.has("Twitter")}
                    onChange={(e) => filterClickPlatform("Twitter")}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="LinkedIn"
                    checked={filterPlatform.has("LinkedIn")}
                    onChange={(e) => filterClickPlatform("LinkedIn")}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Snapchat"
                    checked={filterPlatform.has("Snapchat")}
                    onChange={(e) => filterClickPlatform("Snapchat")}
                  />
                </FormGroup>
              </Grid>
              <Grid item>
                <FormLabel component="legend">
                  Select visibility
                  <IconButton color="primary" size="small">
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </FormLabel>
                <FormGroup
                  aria-label="visibility"
                  name="visibility"
                  onChange={(e) => filterClickVisibility(e.target.value)}
                  value={filterVisibility}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Platform"
                    checked={filterVisibility.has("Platform")}
                    onChange={(e) => filterClickVisibility("Platform")}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Personal"
                    checked={filterVisibility.has("Personal")}
                    onChange={(e) => filterClickVisibility("Personal")}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Interaction"
                    checked={filterVisibility.has("Interaction")}
                    onChange={(e) => filterClickVisibility("Interaction")}
                  />
                </FormGroup>
              </Grid>
              <Grid item>
                <FormLabel component="legend">
                  Select temporality
                  <IconButton color="primary" size="small">
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </FormLabel>
                <FormGroup
                  aria-label="temporality"
                  name="temporality"
                  onChange={e => filterClickTemporality(e.target.value)}
                  value={filterTemporality}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Timestamped"
                    checked={filterTemporality.has("Timestamped")}
                    onChange={(e) => filterClickTemporality("Timestamped")}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Time invariant"
                    checked={filterTemporality.has("Time invariant")}
                    onChange={(e) => filterClickTemporality("Time invariant")}
                  />
                </FormGroup>
              </Grid>
            </FormControl>
          </Grid>
          <Grid item className={classes.itemContainer}>
            <ItemList filteredList={filteredData} />
            {filteredData.length === 0 && <div>Found nothing! Please try again with a different search term or filters.</div>}
          </Grid>
        </Grid>
      </>
    );
  }

export default withStyles(styles)(ExploreList);
