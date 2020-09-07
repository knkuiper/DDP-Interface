import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
//import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function FilterButtons() {
  const classes = useStyles();
  const [value, setValue] = useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid item>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Select platform</FormLabel>
              <RadioGroup aria-label="platform" name="platform" value={value} onChange={handleChange} row>
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
              <RadioGroup aria-label="timelimit" name="timelimit" value={value} onChange={handleChange}>
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
            control={<Checkbox onChange={handleChange} name="Ephemeral" />}
            label="Ephemeral"
            />
            <FormControlLabel
            control={<Checkbox onChange={handleChange} name="Permanent" />}
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
