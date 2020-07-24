import React, { Component } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import SourceData from '../data/data.json';

const styles = theme => ({
  search: {
    margin: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.primary
  }
});

class searchBox extends Component {
  state = {
    value: "",
    sourceData: SourceData,
    filterData: SourceData
  };

  filterList = e => {
    const updatedList = this.state.sourceData.filter(item => {
      return item.type.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({ filterData: updatedList });
  };
  render(){
    const { classes } = this.props;
    return (
      <>
        <Grid container className={classes.search}>
          <TextField
            onChange={this.filterList}
            label="Search"
            variant="standard"
          />
          <SearchIcon />
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(searchBox);
