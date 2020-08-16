import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import {useDispatch,useSelector} from 'react-redux'

const theme = createMuiTheme({
  
  palette: {
    primary: {
      main: purple[500],
      
    },
    secondary: {
      main: green[500],
    },
  },
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    color: theme.palette.primary.main,
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState("TR");
  const dispacth = useDispatch();
  const language= useSelector((state) => state.language)
  
  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value)
    handleLang(event.target.value)
  };
  async function languagepostData(url = '') {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzb25lcmF0bWFjYTAwQGdtYWlsLmNvbSIsImp0aSI6ImNmNWM1ZTcwLWI4ZTgtNGM3NS1hMjlmLWYyYWFmODNjYjk2MyIsIm5iZiI6MTU5NzE3NzM1OCwiZXhwIjoxNTk5NzY5MzU4LCJpc3MiOiJodHRwczovL2NvcmVzdXJ2ZXlhcGkuYXBwc3BvdC5jb20vIiwiYXVkIjoiaHR0cHM6Ly9jb3Jlc3VydmV5YXBpLmFwcHNwb3QuY29tLyJ9.10NOpdnFJg2sVr7Y-llXvaaJop_cx8xoQAi52YEag8o'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
  
    return response.json(); // parses JSON response into native JavaScript objects
  }


  async function languageHandler(lang){
    let lan = {}
    const languageData = await languagepostData('https://coresurveymvc.appspot.com/api/Language')
   console.log(languageData + ' asd ' + lang + ' asd ' + lan)

      languageData.map(item => {
        if(item.Code == lang){
        lan=item.TagList
        }
       })
    dispacth({
      type:'LANGUAGE',
      payload:lan
    })
    
   }

   const handleLang = (lang) =>{
    languageHandler(lang)
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
          SelectDisplayProps={{style:{color: 'white'}}}
          disableUnderline
          
        >
          <MenuItem  value={"EN"}>EN</MenuItem>
          <MenuItem value={"TR"}>TR</MenuItem>
        </Select>
      
        
          
      </FormControl>
    </div>
  );
}
