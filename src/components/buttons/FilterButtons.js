import React, { Component, useState } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SourceData from '../data/index_v2.json';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
//import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
});

class FilterButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: '',
      list: SourceData,
    };
    this.updateFiltering = this.updateFiltering.bind(this);
  }
  updateFiltering(e) {
    this.setState({ selection: e.target.value });
    console.log(e.target.value);
  }

  render() {
    const classes = this.props;

    return (
      <>
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid item>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Select platform</FormLabel>
                <RadioGroup
                  aria-label="platform"
                  name="platform"
                  value={this.props.Platform}
                  onChange={this.updateFiltering} row
                >
                  <FormControlLabel value="google" control={<Radio />} label="Google" />
                  <FormControlLabel value="facebook" control={<Radio />} label="Facebook" />
                  <FormControlLabel value="whatsapp" control={<Radio />} label="Whatsapp" />
                  <FormControlLabel value="instagram" control={<Radio />} label="Instagram" />
                  {/* <FormControlLabel value="uber" control={<Radio />} label="Uber" />
                    <FormControlLabel value="apple" control={<Radio />} label="Apple" />
                    <FormControlLabel value="netflix" control={<Radio />} label="Netflix" />
                    <FormControlLabel value="microsoft" control={<Radio />} label="Microsoft" />
                    <FormControlLabel value="twitter" control={<Radio />} label="Twitter" />
                  <FormControlLabel value="linkedin" control={<Radio />} label="LinkedIn" /> */}
                </RadioGroup>
              </FormControl>
            </Grid>
            {/* <Grid item>
              <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Select visibility</FormLabel>
              <RadioGroup aria-label="timelimit" name="timelimit" value={value} onChange={updateFiltering}>
              <FormControlLabel value="public" control={<Radio />} label="Public" />
              <FormControlLabel value="private" control={<Radio />} label="Private" />
              <FormControlLabel value="1on1" control={<Radio />} label="1 on 1" />
              </RadioGroup>
              </FormControl>
              </Grid>
              <Grid item>
              <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Select time visibility</FormLabel>
              <FormGroup>
              <FormControlLabel
              control={<Checkbox onChange={updateFiltering} name="Ephemeral" />}
              label="Ephemeral"
              />
              <FormControlLabel
              control={<Checkbox onChange={updateFiltering} name="Permanent" />}
              label="Permanent"
              />
              </FormGroup>
              </FormControl>
            </Grid> */}
          </Grid>
        </div>
      </>
    );
  }
}

export default withStyles(styles)(FilterButtons);
