import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



export default function IconLabelButtons(props) {

  
  const classes = useStyles();
 const text = props.text
 const click= props.onClick
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddIcon />}
        onClick={click}
        >
        {text}
      </Button>
    </div>
  );
}
