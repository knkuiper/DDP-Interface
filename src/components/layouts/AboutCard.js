import React, { Component } from "react";
import { Grid, Typography, Card, CardMedia } from '@material-ui/core';
import withStyles from "@material-ui/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";

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
    width: 1200
  },
  cardContainter: {
    padding: theme.spacing(3),
    marginTop: 20,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  baseline: {
    alignSelf: 'baseline',
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: 0
    }
  },
  inline: {
    display: 'inline-block',
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  inlineRight: {
    width: '100%',
    margin: 0,
    textAlign: 'right',
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
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
                <Card className={classes.cardContainter}>
                  <Grid className={classes.baseline}>
                    <Grid className={classes.inline}>
                      <Typography gutterBottom
                        style={{ textTransform: 'uppercase' }}
                        color='primary'
                        variant="h6"
                      >
                        Data Download Packages meta explorer
                      </Typography>
                      <Typography gutterBottom
                        style={{ textTransform: 'uppercase' }}
                        color='primary'
                      >
                        Data download packages
                      </Typography>
                      <Typography gutterBottom>
                        The EU General Data Protection Regulation obliges 
                        any entity that processes personal data of citizens of the 
                        European Union to provide that data to the data subject when 
                        requested in digital format. Most major private data processing 
                        entities, such as social media platforms, smartphone systems, 
                        search engines, photo storage, e-mail, banks, energy providers 
                        and online shops comply by providing Data Download Packages (DDPs) 
                        to the data subjects.
                      </Typography>
                      <Typography gutterBottom
                        style={{ textTransform: 'uppercase' }}
                        color='primary'
                      >
                        Using Data Download Packages for scientific research
                      </Typography>
                      <Typography gutterBottom>
                        If research subjects voluntarily donate their DDPs for 
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
                        answer the research question under investigation.
                      </Typography>
                      <CardMedia
                        component="img"
                        alt="ddp-pipeline"
                        height="250"
                        image="img/ddp-pipeline.png"
                      />
                      <Typography gutterBottom
                        style={{ textTransform: 'uppercase' }}
                        color='primary'
                      >
                        Exploring the content of Data Download Packages
                      </Typography>
                      <Typography gutterBottom>
                        DDPs can be collected from any entity that processes personal data. 
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
                        DDP files to help you answer your research question.
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(AboutCard);
