import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SimpleSelect from './select'
import './App.css';


import {useSelector, useDispatch} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();
  const   data = useSelector((state) => state.surveys)
  const language= useSelector((state) => state.language)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          
          <Typography variant="h6" color="inherit">
          {language._SURVEYS +': ' } {data.length } 
          </Typography>
          <SimpleSelect className="select"/>
        </Toolbar>
      </AppBar>
    </div>
  );
}