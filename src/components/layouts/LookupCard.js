import React, { Component } from 'react';
import { Typography, Paper, Grid, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import SearchIcon from '@material-ui/icons/Search';
import SourceData from '../data/data.json';
import AddButton from '../buttons/AddButton';

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
    width: 1200
  },
  paper: {
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
  }
});

class LookupCard extends Component {
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
    const searchBox = (
          <Grid container className={classes.search}>
            <TextField
              onChange={this.filterList}
              label="Search"
              variant="standard"
            />
            <SearchIcon />
          </Grid>
    );
    const selectBox = this.state.filterData.map(indexlist => (
      <li key={indexlist.id}>
        {indexlist.type}
      </li>
    ));

      var populate = SourceData.map(function (value) {
            return(
              <>
                <CssBaseline />
                <div className={classes.root}>
                  <Grid container justify="center">
                    <Grid
                      spacing={10}
                      alignItems="center"
                      justify="center"
                      container
                      className={classes.grid}
                    >
                      <Grid item xs={12} md={12}>
                        <Paper className={classes.paper}>
                          <Grid className={classes.itemContainer}>
                            <Grid className={classes.inline}>
                              <Typography
                                style={{ textTransform: 'uppercase' }}
                                color='primary'
                                gutterBottom
                              >
                                {value.provider}
                              </Typography>
                              <Typography variant="body1" gutterBottom>
                                <b>Platform:</b> {value.datapackage}
                              </Typography>
                              <Typography variant="body1" gutterBottom>
                                <b>File:</b> {value.file}
                              </Typography>
                              <Typography variant="body1" gutterBottom>
                                <b>File format:</b> {value.filetype}
                              </Typography>
                              <Typography variant="body1" gutterBottom>
                                <b>Tags:</b> {value.type}
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid className={classes.inlineRight}>
                            <AddButton />
                          </Grid>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </>
            )
        });
        return (
          <>
            <div>
              {searchBox}
            </div>
            <div>
              {populate}
            </div>
          </>
        );
    }
}

export default withStyles(styles)(LookupCard);
