import React, { useState, useEffect } from 'react';
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

function ListCardtest(props) {
  const { classes } = props;

  const [data, setData] = useState(SourceData);
  //filterstate for text and buttons
  const [searchText, setSearchText] = useState("");

  const [filter, setFilter] = useState(new Set());

  const [filterPlatform, setFilterPlatform] = useState("");
  const [filterVisibility, setFilterVisibility] = useState("");
  const [filterTemporality, setFilterTemporality] = useState("");

  // exclude column list from filter
  const excludeColumns = ["id", "Elements", "Filepath"];

  const handleInputChange = (value) => {
    setSearchText(value);
  };

  const handlePlatformChange = e => {
    setFilterPlatform(e.target.value);
  };

  const handleVisibilityChange = e => {
    setFilterVisibility(e.target.value);
  };

  const handleTemporalityChange = e => {
    setFilterTemporality(e.target.value);
  };

  useEffect(() => {
    const filteredData = data.filter(item =>
      (searchText.length > 0 && !(Object.keys(item).some(key => excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(searchText.toLowerCase().trim())))) &&
      (!filterPlatform || item.Platform === filterPlatform) &&
      (!filterVisibility || item.Visibility === filterVisibility) &&
      (!filterTemporality || item.Temporality === filterTemporality)
    );
    setData(filteredData);
  }, [data, searchText, filterPlatform, filterVisibility, filterTemporality]);


    return (
      <>
        <Grid container className={classes.search}>
          <TextField
            onChange={(e) => handleInputChange(e.target.value)}
            label="Search"
            value={searchText}
          />
          <SearchIcon />
        </Grid>
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid item>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Select platform</FormLabel>
                <RadioGroup
                  row
                  aria-label="platform"
                  name="platform"
                  onChange={handlePlatformChange}
                >
                  <FormControlLabel
                    control={<Radio />}
                    label="Google"
                    //checked={filter.has("Google")}
                    value="Google"
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="Facebook"
                    //checked={filter.has("Facebook")}
                    value="Facebook"
                  />
                  {/* <FormControlLabel
                    control={<Radio />}
                    label="WhatsApp"
                    checked={filter.has("WhatsApp")}
                    onChange={(e) => filterClick("WhatsApp")}
                    />
                    <FormControlLabel
                    control={<Radio />}
                    label="Instagram"
                    checked={filter.has("Instagram")}
                    onChange={(e) => filterClick("Instagram")}
                    />
                    <FormControlLabel
                    control={<Radio />}
                    label="Uber"
                    checked={filter.has("Uber")}
                    onChange={(e) => filterClick("Uber")}
                    />
                    <FormControlLabel
                    control={<Radio />}
                    label="Apple"
                    checked={filter.has("Apple")}
                    onChange={(e) => filterClick("Apple")}
                    />
                    <FormControlLabel
                    control={<Radio />}
                    label="Netflix"
                    checked={filter.has("Netflix")}
                    onChange={(e) => filterClick("Netflix")}
                    />
                    <FormControlLabel
                    control={<Radio />}
                    label="Microsoft"
                    checked={filter.has("Microsoft")}
                    onChange={(e) => filterClick("Microsoft")}
                    />
                    <FormControlLabel
                    control={<Radio />}
                    label="Twitter"
                    checked={filter.has("Twitter")}
                    onChange={(e) => filterClick("Twitter")}
                    />
                    <FormControlLabel
                    control={<Radio />}
                    label="LinkedIn"
                    checked={filter.has("LinkedIn")}
                    onChange={(e) => filterClick("LinkedIn")}
                    />
                    <FormControlLabel
                    control={<Radio />}
                    label="Snapchat"
                    checked={filter.has("Snapchat")}
                    onChange={(e) => filterClick("Snapchat")}
                  /> */}
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Select visibility</FormLabel>
                <FormGroup
                  aria-label="visibility"
                  name="visibility"
                  onChange={handleVisibilityChange}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Platform"
                    //checked={filter.has("Platform")}
                    value="Platform"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Personal"
                    //checked={filter.has("Personal")}
                    value="Personal"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Interaction"
                    //checked={filter.has("Interaction")}
                    value="Interaction"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Select temporality</FormLabel>
                <FormGroup
                  aria-label="temporality"
                  name="temporality"
                  onChange={handleTemporalityChange}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Timestamped"
                    //checked={filter.has("Timestamped")}
                    value="Timestamped"
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Time invariant"
                    //checked={filter.has("Time invariant")}
                    value="Time invariant"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
        </div>

        <div>
          <ItemList filteredList={data} />
          <Grid container justify="center">{data.length === 0 && <span>Found nothing! Please try again with a different search term.</span>}</Grid>
        </div>
      </>
    );
  }

export default withStyles(styles)(ListCardtest);
