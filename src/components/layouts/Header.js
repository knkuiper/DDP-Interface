import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

class Header extends Component {
  render() {
    return (
      <AppBar position="static" color="secondary">
        <Toolbar>
        <Button href="/home">
          <Typography variant="headline" color="primary">
            Iventa
          </Typography>
          </Button>
          <Button href="/" style={{marginLeft: 'auto'}} color="primary">
              <i class="fa fa-user fa-2x" aria-hidden="true"></i>
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
