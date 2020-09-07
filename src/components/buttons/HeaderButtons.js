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
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit"
  },
  listItem: {
    float: "left",
    color: "inherit",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    padding: "0",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      "&:after": {
        width: "calc(100% - 30px)",
        content: '""',
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
              size="small"
              startIcon={<CreateNewFolderIcon />}
            >
              My packages
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="/comparison"
              aria-label="comparison"
              size="small"
              startIcon={<CompareIcon />}
            >
              Comparison
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <Button
              href="/info"
              aria-label="info"
              size="small"
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
