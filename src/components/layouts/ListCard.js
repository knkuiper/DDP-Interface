import React, { Component } from 'react';
import { Typography, Grid, Card, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import SourceData from '../data/data.json';
import SearchIcon from '@material-ui/icons/Search';
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
    width: 1000
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
  }
});

class ListCard extends Component {
  state = {
      search: '',
  };
  updateSearch(e) {
    this.setState({search: e.target.value})
  }
  render(){
    let filteredList = SourceData.filter(
      (value) => {
        return value.type.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );
    const { classes } = this.props;
    return (
      <>
        <Grid container className={classes.search}>
          <TextField
            onChange={this.updateSearch.bind(this)}
            label="Search"
            //variant="standard"
            value={this.state.search}
          />
          <SearchIcon />
        </Grid>
        <div>
          {filteredList.map(value =>
            <div key={value.id}>
              <CssBaseline />
              <div className={classes.root}>
                <Grid container justify="center" className={classes.test}>
                  <Grid
                    container
                    spacing={10}
                    alignItems="center"
                    justify="center"
                    className={classes.grid}
                  >
                    <Grid item xs={12} md={12}>
                      <Card className={classes.cardContainter}>
                        <Grid className={classes.inline}>
                          <Typography
                            style={{ textTransform: 'uppercase' }}
                            color='primary'
                            gutterBottom
                          >
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
                        <Grid className={classes.inlineRight}>
                          <AddButton />
                        </Grid>
                      </Card>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default withStyles(styles)(ListCard);
