import React, { Fragment } from 'react';
import '../App.css';
import Paper from '@material-ui/core/Paper';
import Example1 from '../layouts/Lookup';
import Example2 from '../layouts/TestInteractiveCard.js';
import SourceData from '../data/ddp-overview.json';

const Home = () => {
    return (
      <Fragment>
        <Paper>
          {/* <Example1 /> */}
          <Example1 />
          {/* {SourceData.map((dataDetails, index)=>{
            return <div>
              <h1>{dataDetails.Platform}</h1>
              <p>{dataDetails.Concept}</p>
            </div>
          })} */}
        </Paper>
      </Fragment>
    );
}

export default Home;
