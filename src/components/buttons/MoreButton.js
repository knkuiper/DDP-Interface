import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { saveAs } from 'file-saver';;

class MoreButton extends Component {

    render() {
        return (
            <Button
              aria-label="save"
              size="small"
              variant="contained"
              color="primary"
              startIcon={<ExpandMoreIcon />}
            >
            </Button>
          );
    }
}

export default MoreButton;
