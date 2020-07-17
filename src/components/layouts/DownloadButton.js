import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { saveAs } from 'file-saver';
import GetAppIcon from '@material-ui/icons/GetApp';

class DownloadButton extends Component {
    // constructor(props) {
    //     super(props)
    // }

    handleFileDownload = (attachment) => {
        saveAs(attachment.blob, attachment.file_name)
    }

    render() {
        return (
            <Button
              aria-label="download"
              size="small"
              variant="contained"
              color="primary"
              startIcon={<GetAppIcon />}
              onClick={() => this.handleFileDownload(this.props.attachment)}>
              Download
            </Button>
          );
    }
}

export default DownloadButton;
