import React, { Fragment } from 'react';
import { Typography, Paper, Grid } from '@material-ui/core';
import '../App.css';
import Sidebar from '../layouts/Sidebar';
import Search from '../layouts/Search';

const Home = () => {
    return (
      <Fragment>
        <Paper>
          <Grid>
            <Sidebar />
          </Grid>
        </Paper>
      </Fragment>
    );
}

export default Home;
