import React, { Component } from "react";
import { Grid, Typography, Card } from '@material-ui/core';
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import CardItem from '../layouts/CardItem';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["A500"],
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 20,
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    width: 1000
  }
});

class AboutCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <>
        <CssBaseline />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid
              spacing={10}
              alignItems="center"
              justify="center"
              container
              className={classes.grid}
            >
              <Grid item xs={12}>
                <CardItem
                  className={classes.card}
                  title="Data Download Packages meta explorer"
                  subtitle1="Data download packages"
                  body1="The EU General Data Protection Regulation obliges 
                  any entity that processes personal data of citizens of the 
                  European Union to provide that data to the data subject when 
                  requested in digital format. Most major private data processing 
                  entities, such as social media platforms, smartphone systems, 
                  search engines, photo storage, e-mail, banks, energy providers 
                  and online shops comply by providing Data Download Packages (DDPs) 
                  to the data subjects."
                  subtitle2="Using Data Download Packages for scientific research"
                  body2="If research subjects voluntarily donate their DDPs for 
                  scientific research, they can be used to answer social scientific 
                  questions – with consent – regarding citizens’ digital life. 
                  
                  To enable using DDPs for scientific research, Boeschoten et al. (2020) 
                  propose to use the following five steps:  
                    1.	Data subjects are recruited as respondents using standard survey 
                    sampling techniques and the researcher determines which DDPs are relevant 
                    for the particular research question under investigation.
                    2.	Respondents request their DDPs with the various selected providers,
                    storing these locally on their own device. 
                    3.	Stored DDPs are locally processed to extract relevant research 
                    variables.
                    4.	Consent is requested of the respondent to send the derived 
                    variables to the researcher.
                    5.	The researcher further analyzes the extracted variables to 
                    answer the research question under investigation."
                  alt="ddp-pipeline" 
                  image="img/ddp-pipeline.png"
                  subtitle3="Exploring the content of Data Download Packages"
                  body3="DDPs can be collected from any entity that processes personal data. 
                  The range is enormous and for researchers it can be challenging to obtain 
                  insight in the data that is exactly collected by all these different entities. 
                  This meta explorer aims to centralize and facilitate the process of finding 
                  the appropriate DDP for a particular research question. 
                  
                  The DDP meta explorer facilitates the following processes: 
                  
                  -	Provides insight in what type of content can be found in DDPs of different 
                  entities
                  -	Helps to find the appropriate file or folder within a particular DDP when 
                  a particular research question is considered
                  -	Provides the exact location where the selected information can be found in 
                  a DDP and allows for this information to be saved
                  
                  The DDP meta explorer currently is currently constructed and now contains 
                  DDP meta information of major social media platforms that have been collected 
                  in the second half of 2020. We aim to include information of many more entities 
                  as well as to update the information regularly. In addition, we aim to information
                  with links to existing open source code that can for example be used in the 
                  ‘local signal processing’ phase.

                  Below, you can find more information about the entities currently included 
                  and the type of characteristics you can use to specify your search for the right 
                  DDP files to help you answer your research question."
                />
                <Typography gutterBottom variant="h5" component="h2">
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(AboutCard);
