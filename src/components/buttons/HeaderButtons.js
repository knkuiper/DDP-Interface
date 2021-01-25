import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import HomeIcon from '@material-ui/icons/Home';
//import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
//import FindInPageIcon from '@material-ui/icons/FindInPage';
// import InfoIcon from '@material-ui/icons/Info';
// import CompareIcon from '@material-ui/icons/Compare';

const styles = theme => ({
  list: {
    fontSize: "14px",
    margin: 0,
    listStyle: "none",
    color: "inherit"
  },
  listItem: {
    float: "left",
    position: "relative",
    display: "block",
    width: "auto",
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 20px)",
        display: "block",
        height: "1px",
        marginLeft: "15px",
      }
    }
  }
});

class HeaderButtons extends Component {
  render() {
    const { classes } = this.props;

    return (
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
              <HomeIcon style={{ fontSize: 30 }} />
              Logo?
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button href="/info"
              aria-label="info"
              size="medium"
              //startIcon={<InfoIcon />}
            >
              <Typography>
                about
              </Typography>
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button href="/explorer"
              aria-label="meta-explorer"
              size="medium"
              //startIcon={<FindInPageIcon />}
            >
              <Typography>
                DDP meta-explorer
              </Typography>
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button href="/packages"
              aria-label="packages"
              size="medium"
              //startIcon={<CreateNewFolderIcon />}
            >
              <Typography> 
              saved files
              </Typography>
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button href="/comparison"
              aria-label="comparison"
              size="medium"
              //startIcon={<CompareIcon />}
            >
              <Typography>
                user guide tool
              </Typography>
            </Button>
          </ListItem>
        </List>
      );
    }
}

export default withStyles(styles)(HeaderButtons);
