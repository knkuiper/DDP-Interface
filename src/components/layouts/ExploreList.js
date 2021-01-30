import React, { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SourceData from '../data/index_v4_new.json';
import SearchIcon from '@material-ui/icons/Search';
import ItemList from "./ItemList.js";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

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
  chipsContainer: {
    padding: theme.spacing(2),
    justifyContent: 'center'
  },
  filterChips: {
    margin: 2
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

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    maxWidth: 220,
    textAlign: "center",
  },
}))(Tooltip);

const StyledChip = withStyles((theme) => ({
  root: {
    '&:hover, &:focus': {
      backgroundColor: "#FFCD00"
    }
  },
}))(Chip);

function ExploreList(props) {
  const { classes } = props;

  const [data] = useState(SourceData);

  const [searchText, setSearchText] = useState("");
  //const [filter, setFilter] = useState(new Set());
  const [filterPlatform, setFilterPlatform] = useState(new Set());
  const [filterVisibility, setFilterVisibility] = useState(new Set());
  const [filterTemporality, setFilterTemporality] = useState(new Set());
  const [filterTags, setFilterTags] = useState(new Set());

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
  }

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

  const filterChipsTags = (value) => {
    if (filterTags.has(value)) {
      setFilterTags(prevFilter => {
        const newSet = new Set(prevFilter);
        newSet.delete(value);
        return newSet;
      });
    } else {
      setFilterTags(prevFilter => {
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

    if (filterTags.size > 0 && !(Object.keys(item).some(key => key ? false : item[key].toString().toLowerCase().includes(filterTags.toLowerCase().trim()))))
      //!(filterTags.has(item.Tags)))
      return false;

    if (searchText.length > 0 && !(Object.keys(item).some(key => excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(searchText.toLowerCase().trim()))))
      return false;

    return true;
  });

  console.log(filterTags);
  //console.log(filteredData.length);
  
  return (
    <>
      <Grid container
        spacing={3}
        className={classes.root}
      >
      <Grid container className={classes.search}>
          <Grid item>
            <TextField
              onChange={(e) => handleInputChange(e.target.value)}
              label="Search"
              value={searchText}
            />
            <SearchIcon />
          </Grid>
          <Grid container className={classes.chipsContainer}>
            <Grid item> 
              <FormLabel component="legend">
                Select tags
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography gutterBottom>Tags</Typography>
                      <p>Restrict the search by searching only within a specific tag.</p>
                    </React.Fragment>
                  }
                >
                  <IconButton color="primary" size="small">
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </HtmlTooltip>  
              </FormLabel>
            </Grid>
            <Grid item>
              <StyledChip 
                className={classes.filterChips}
                clickable="true"
                label="Location"
                onClick={e => filterChipsTags("Location")}
              />
              <StyledChip
                className={classes.filterChips}
                label="Visual content"
                onClick={e => filterChipsTags("Visual content")}
              />
              <StyledChip
                className={classes.filterChips}
                label="Textual content"
                onClick={e => filterChipsTags("Textual content")}
              />
              <StyledChip
                className={classes.filterChips}
                label="Connections"
                onClick={e => filterChipsTags("Connections")}
              />
              <StyledChip
                className={classes.filterChips}
                label="Platform"
                onClick={e => filterChipsTags("Platform")}
              />
              <StyledChip
                className={classes.filterChips}
                label="Profile"
                onClick={e => filterChipsTags("Profile")}
              />
              <StyledChip
                className={classes.filterChips}
                label="Third party"
                onClick={e => filterChipsTags("Third party")}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.filter}>
          <FormControl component="fieldset" className={classes.formControl}>
            <Grid item>
              <FormLabel component="legend">
                Select platform
                <HtmlTooltip
                title={
                  <React.Fragment>
                      <Typography gutterBottom>Platform</Typography>
                      <p>Restrict the search by searching only within a specific platform.</p>
                  </React.Fragment>
                }
                >
                <IconButton color="primary" size="small">
                  <InfoIcon fontSize="small" />
                  </IconButton>
                </HtmlTooltip>
              </FormLabel>
              <FormGroup
                aria-label="platform"
                name="platform"
                onChange={(e) => filterClickPlatform(e.target.value)}
                value={filterPlatform}
              >
                <FormControlLabel
                  control={<Checkbox 
                    color="primary"
                  />}
                  label="Google"
                  checked={filterPlatform.has("Google")}
                  onChange={(e) => filterClickPlatform("Google")}
                />
                <FormControlLabel
                  control={<Checkbox 
                    color="primary"
                  />}
                  label="Facebook"
                  checked={filterPlatform.has("Facebook")}
                  onChange={(e) => filterClickPlatform("Facebook")}
                />
                <FormControlLabel
                  control={<Checkbox
                    color="primary"
                  />}
                  label="WhatsApp"
                  checked={filterPlatform.has("WhatsApp")}
                  onChange={(e) => filterClickPlatform("WhatsApp")}
                />
                <FormControlLabel
                  control={<Checkbox
                    color="primary"
                  />}
                  label="Instagram"
                  checked={filterPlatform.has("Instagram")}
                  onChange={(e) => filterClickPlatform("Instagram")}
                />
                <FormControlLabel
                  control={<Checkbox
                    color="primary"
                  />}
                  label="Uber"
                  checked={filterPlatform.has("Uber")}
                  onChange={(e) => filterClickPlatform("Uber")}
                />
                <FormControlLabel
                  control={<Checkbox
                    color="primary"
                  />}
                  label="Apple"
                  checked={filterPlatform.has("Apple")}
                  onChange={(e) => filterClickPlatform("Apple")}
                />
                <FormControlLabel
                  control={<Checkbox
                    color="primary"
                  />}
                  label="Netflix"
                  checked={filterPlatform.has("Netflix")}
                  onChange={(e) => filterClickPlatform("Netflix")}
                />
                <FormControlLabel
                  control={<Checkbox
                    color="primary"
                  />}
                  label="Microsoft"
                  checked={filterPlatform.has("Microsoft")}
                  onChange={(e) => filterClickPlatform("Microsoft")}
                />
                <FormControlLabel
                  control={<Checkbox
                    color="primary"
                  />}
                  label="Twitter"
                  checked={filterPlatform.has("Twitter")}
                  onChange={(e) => filterClickPlatform("Twitter")}
                />
                <FormControlLabel
                  control={<Checkbox
                    color="primary"
                  />}
                  label="LinkedIn"
                  checked={filterPlatform.has("LinkedIn")}
                  onChange={(e) => filterClickPlatform("LinkedIn")}
                />
                <FormControlLabel
                  control={<Checkbox
                    color="primary"
                  />}
                  label="Snapchat"
                  checked={filterPlatform.has("Snapchat")}
                  onChange={(e) => filterClickPlatform("Snapchat")}
                />
              </FormGroup>
            </Grid>
            <Grid item>
              <FormLabel component="legend">
                Select visibility
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography gutterBottom>Visibility</Typography>
                      <p>Restrict the search by searching only within a specific type of content visibility.</p>
                    </React.Fragment>
                  }
                >
                  <IconButton color="primary" size="small">
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </HtmlTooltip>
              </FormLabel>
              <FormGroup
                aria-label="visibility"
                name="visibility"
                onChange={(e) => filterClickVisibility(e.target.value)}
                value={filterVisibility}
              >
                <FormControlLabel
                  control={<Checkbox
                    color="primary"
                  />}
                  label="Platform"
                  checked={filterVisibility.has("Platform")}
                  onChange={(e) => filterClickVisibility("Platform")}
                />
                <FormControlLabel
                  control={<Checkbox
                    color="primary"
                  />}
                  label="Personal"
                  checked={filterVisibility.has("Personal")}
                  onChange={(e) => filterClickVisibility("Personal")}
                />
                <FormControlLabel
                  control={<Checkbox
                    color="primary"
                  />}
                  label="Interaction"
                  checked={filterVisibility.has("Interaction")}
                  onChange={(e) => filterClickVisibility("Interaction")}
                />
              </FormGroup>
            </Grid>
            <Grid item>
              <FormLabel component="legend">
                Select temporality
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <Typography gutterBottom>Temporality</Typography>
                      <p>Restrict the search by searching only within a specific type of content temporality.</p>
                    </React.Fragment>
                  }
                >
                  <IconButton color="primary" size="small">
                    <InfoIcon fontSize="small" />
                  </IconButton>
                </HtmlTooltip>
              </FormLabel>
              <FormGroup
                aria-label="temporality"
                name="temporality"
                onChange={e => filterClickTemporality(e.target.value)}
                value={filterTemporality}
              >
                <FormControlLabel
                  control={<Checkbox
                    color="primary"
                  />}
                  label="Timestamped"
                  checked={filterTemporality.has("Timestamped")}
                  onChange={(e) => filterClickTemporality("Timestamped")}
                />
                <FormControlLabel
                  control={<Checkbox
                    color="primary"
                  />}
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
