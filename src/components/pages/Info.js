import React, { Fragment } from 'react';
import { Paper } from '@material-ui/core';
import About from '../layouts/About';
import Userguide from '../layouts/Userguide';

const Info = () => {
    return (
        <Fragment>
            <Paper>
              <About />
              <Userguide />
            </Paper>
        </Fragment>
    );
}

export default Info;
