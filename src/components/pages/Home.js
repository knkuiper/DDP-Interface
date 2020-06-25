import React, { Fragment} from 'react';
import '../App.css';
import {Paper} from '@material-ui/core';

const Home = () => {
    return (
        <Fragment>
            <Paper>
                <Events />
            </Paper>
        </Fragment>
    );
}

export default Home;
