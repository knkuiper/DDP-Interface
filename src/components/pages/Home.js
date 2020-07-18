import React, { Fragment } from 'react';
import '../App.css';
import { Paper } from '@material-ui/core/Paper';
import Example1 from '../layouts/Lookup';
import Example2 from '../layouts/TestInteractiveCard.js';

const Home = () => {
    return (
      <Fragment>
        <Paper>
          {/* <Example1 /> */}
          <Example2 />
        </Paper>
      </Fragment>
    );
}

export default Home;
