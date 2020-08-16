import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import {useSelector, useDispatch} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function BasicTextFields(props) {
  const classes = useStyles();
  
  const dispacth = useDispatch();

  const handleChange = (text) => {
    dispacth({
      type:'ONCHANGE',
      value:text.target.value
    })
  }
const value = useSelector((state) => state.value)
  return (
    <form className={classes.root} noValidate autoComplete="off">
      
        <TextField
          id="standard-full-width"
          label="Name"
          style={{ margin: 8 }}
          placeholder={value}
          helperText="Please Enter the Name of the Survey"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChange}
          value={value}
        />
    </form>
  );
}
