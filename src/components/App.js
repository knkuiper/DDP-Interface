import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Explorer from './pages/Explorer';
import Packages from './pages/MyPackages';
import Comparison from './pages/Comparison';
import About from './pages/About';
import Header from './layouts/Header';
import './App.css';

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#FFCD00'
          // yellow: '#FFCD00'
          // green: '#24A793'
        },
        secondary: {
          main:'#F2F2F2'
            //001240
        },
        error: {
            main: '#C00A35'
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
                    <Route path="/packages" component={ Packages }/>
                    <Route path="/explorer" component={ Explorer } />
                    <Route path="/comparison" component={Comparison} />
                    <Route path="/about" component={ About }/>
                    <Route path='/'>
                      <Redirect to="/about" />
                    </Route>
                  </Switch>
                </div>
              </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}

export default App;
