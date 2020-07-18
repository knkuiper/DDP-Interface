import React, { Component, Fragment } from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import SourceData from '../data/data.json';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import AddButton from './AddButton';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"],
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 20,
    padding: 20
  },
  grid: {
    width: 1200
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  avatar: {
    margin: 10,
    backgroundColor: theme.palette.grey['200'],
    color: theme.palette.text.primary,
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  baseline: {
    alignSelf: 'baseline',
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: 0
    }
  },
  inline: {
    display: 'inline-block',
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  inlineRight: {
    width: '30%',
    textAlign: 'right',
    marginLeft: 50,
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0,
      textAlign: 'center'
    }
  }
});

class Example2 extends Component {
  state = {
    value: "",
    sourceData: SourceData,
    filterData: SourceData
  };

  filterList = e => {
    const updatedList = this.state.sourceData.filter(item => {
      return item.Platform.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({ filterData: updatedList });
  };

  render(){
      const { classes } = this.props;
      const searchBox = (
        <input
          type="text"
          onChange={this.filterList}
        />
      );

      var populate = SourceData.map(function (value) {
            return(
              <Fragment>
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
                            <Grid className={classes.baseline}>
                              <Grid className={classes.inline}>
                                <Typography style={{ textTransform: 'uppercase' }} gutterBottom>
                                  {value.provider}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                  <b>Data package:</b> {value.datapackage}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                  <b>File:</b> {value.file}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                  <b>Filetype:</b> {value.filetype}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                  <b>Type:</b> {value.type}
                                </Typography>
                              </Grid>
                            </Grid>
                            <Grid className={classes.inlineRight}>
                              <AddButton />
                            </Grid>
                          </Grid>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </Fragment>
            )
        });
        return (
          <Grid>
            {searchBox}
            {populate}
          </Grid>
        );
    }
}

export default withStyles(styles)(Example2);
