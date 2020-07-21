import React, { Component } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import HeaderButtons from '../buttons/HeaderButtons';

class Header extends Component {
  render() {
    return (
      <>
        <AppBar
          position="static"
          color="primary"
        >
          <Toolbar>
            <HeaderButtons />
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default Header;
