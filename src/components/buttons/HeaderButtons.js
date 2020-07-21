import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';
import CreateNewFolderIcon from '@material-ui/icons/CreateNewFolder';
import InfoIcon from '@material-ui/icons/Info';
import CompareIcon from '@material-ui/icons/Compare';

class HeaderButtons extends Component {
  render() {
    return (
      <>
        <Button href="/home">
          <Typography
            variant="h6"
            color="inherit"
          >
            DDP manager
          </Typography>
        </Button>
        <Button
          href="/packages"
          aria-label="packages"
          size="small"
          color="inherit"
          startIcon={<CreateNewFolderIcon />}
        >
          My packages
        </Button>
        <Button
          href="/comparison"
          aria-label="comparison"
          size="small"
          color="inherit"
          startIcon={<CompareIcon />}
        >
          Comparison
        </Button>
        <Button
          href="/info"
          aria-label="info"
          size="small"
          color="inherit"
          startIcon={<InfoIcon />}
        >
          About
        </Button>
      </>
    );
  }
}

export default HeaderButtons;
