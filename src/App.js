import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Home from '../pages/Home';
import About from '../pages/About';
import Packages from '../pages/MyPackages';
import Header from '../layouts/Header';
import './App.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00AAC3'
        },
        secondary: {
            main:'#000000'
        },
        error: {
            main: '#FF0000'
        },
    },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme} id="root">
        <BrowserRouter>
          <div>
            <Header>
              <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/packages" component={Packages}/>
              </Switch>
            </Header>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
