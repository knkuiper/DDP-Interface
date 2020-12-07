import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Home from './pages/Home';
import Packages from './pages/MyPackages';
import Comparison from './pages/Comparison';
import Info from './pages/Info';
import Header from './layouts/Header';
import './App.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#4db6ac',
            light: '#82e9de',
            dark: '#00867d'
        },
        secondary: {
            main:'#b2dfdb',
            light: '#e5ffff',
            dark: '#82ada9'
        },
        tertiary: {
            main: "FFFFFF"
        },
        error: {
            main: '#FF0000'
        },
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
              <BrowserRouter>
                <div>
                  <Header />
                  <Switch>
                    <Route path="/home" component={ Home }/>
                    <Route path="/packages" component={ Packages }/>
                    <Route path="/comparison" component={ Comparison }/>
                    <Route path="/info" component={ Info }/>
                    <Route path='/'>
                      <Redirect to="/home" />
                    </Route>
                  </Switch>
                </div>
              </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;
