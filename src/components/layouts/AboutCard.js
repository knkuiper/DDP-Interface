import React, { Component } from "react";
import { Grid } from '@material-ui/core';
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardItem from '../layouts/CardItem';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"],
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 20,
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    width: 1000
  }
});

class AboutCard extends Component {
  render() {
    const { classes } = this.props;
    return (
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
              <Grid item xs={12}>
                <CardItem
                  className={classes.card}
                  title="The Data Download Package Manager"
                  subtitle1="About the website"
                  body1="{Draft} This webpage is a resource for researchers within
                  the social and behavioural sciences who wish to know more about
                  user data packages which can be downloaded from various social
                  media platforms. Data from data download packages can be used
                  in social and behavioural research.
                  If you have questions about the tool or experience any issues
                  using the tool, you can contact us at: "
                  subtitle2="User guide tool"
                  body2="{Draft} This tool allows researchers to find information
                  about the various social media data packages and how to use
                  the infomration from these packages in their research. On the
                  home page you can search for concepts and use the extra filter
                  buttons to filter the search further. By pressing the add package
                  button the selected package is added into the 'My packages
                  folder'. On this page, an overview of the chosen packages and
                  information can be downloaded to your own computer."
                />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(AboutCard);
