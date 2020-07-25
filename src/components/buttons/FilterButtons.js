import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

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
              <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="facebook" control={<Radio />} label="Facebook" />
                <FormControlLabel value="instagram" control={<Radio />} label="Instagram" />
                <FormControlLabel value="twitter" control={<Radio />} label="Twitter" />
                <FormControlLabel value="google" control={<Radio />} label="Google" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Select conversation type</FormLabel>
              <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="public" control={<Radio />} label="Public" />
                <FormControlLabel value="private" control={<Radio />} label="Private" />
                <FormControlLabel value="1on1" control={<Radio />} label="1 on 1" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Select age group</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} name=">20" />}
                  label=">20"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} name="20-40" />}
                  label="20-40"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleChange} name="40+" />}
                  label="40+"
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
