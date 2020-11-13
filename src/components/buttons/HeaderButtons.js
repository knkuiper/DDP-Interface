import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import InfoIcon from '@material-ui/icons/Info';
import CompareIcon from '@material-ui/icons/Compare';

const styles = theme => ({
  list: {
    fontSize: "14px",
    margin: 0,
    listStyle: "none",
    color: "inherit"
  },
  listItem: {
    float: "left",
    color: "inherit",
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
        backgroundColor: "#e5e5e5"
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
            <Button href="/home">
              <Typography
                variant="h6"
              >
                DDP manager
              </Typography>
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="/packages"
              aria-label="packages"
              size="medium"
              startIcon={<CreateNewFolderIcon />}
            >
              My packages
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="/comparison"
              aria-label="comparison"
              size="medium"
              startIcon={<CompareIcon />}
            >
              Comparison
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="/info"
              aria-label="info"
              size="medium"
              startIcon={<InfoIcon />}
            >
              About
            </Button>
          </ListItem>
        </List>
      );
    }
}

export default withStyles(styles)(HeaderButtons);
