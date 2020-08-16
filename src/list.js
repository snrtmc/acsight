import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/List';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'

import {connect} from 'react-redux'
import {useSelector, useDispatch} from 'react-redux'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));



 function InteractiveList(props) {
   
  const dispacth = useDispatch();
  const surveys = useSelector((state) => state.surveys)

  const editHandler = (item) => {
    dispacth({
      type:'EDIT',
      load:'EDIT',
      value: item.Name,
      surveyId:item.ID
    })
  }

  const deleteHandler = (item) =>{
    let newSurveyList=[...surveys]
    newSurveyList.map((x,i)=> {
      if (x.ID == item.ID) {
        newSurveyList.splice(i,1)
      }
    })
    dispacth({
      type:'DELETESURVEY',
      payload:newSurveyList
    })
   
       async function deleteSurvey(url = '') {
        
        // Default options are marked with *
        const response = await fetch(url, {
          method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzb25lcmF0bWFjYTAwQGdtYWlsLmNvbSIsImp0aSI6ImNmNWM1ZTcwLWI4ZTgtNGM3NS1hMjlmLWYyYWFmODNjYjk2MyIsIm5iZiI6MTU5NzE3NzM1OCwiZXhwIjoxNTk5NzY5MzU4LCJpc3MiOiJodHRwczovL2NvcmVzdXJ2ZXlhcGkuYXBwc3BvdC5jb20vIiwiYXVkIjoiaHR0cHM6Ly9jb3Jlc3VydmV5YXBpLmFwcHNwb3QuY29tLyJ9.10NOpdnFJg2sVr7Y-llXvaaJop_cx8xoQAi52YEag8o'
          }
        });
        const res = await response.json()
       
        
  //      return response.json(); // parses JSON response into native JavaScript objects
      }
  
      deleteSurvey('https://coresurveymvc.appspot.com/api/Survey/' + item.ID ) 
    
  
  }

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const classes = useStyles();

 

  return (
    <div className={classes.root}>
     
        <Grid item xs={12} md={6}>
          
          <div className={classes.demo}>
            
         {surveys.map(item => {
           return(
            <List dense={dense} key= {item.ID}>
              <ListItem className="listItem">
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item.Name}
                  secondary={secondary ? 'Secondary text' : null}
                />
                <ListItemSecondaryAction> 
                  <IconButton edge="end" aria-label="edit" onClick={() => editHandler(item)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton  edge="end" aria-label="delete" onClick={() => deleteHandler(item)}>
                    <DeleteIcon  />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
          </List>
           )
         })
          }
          </div>
        </Grid>
      
    </div>
  );
}

const mapStateToProps= (state) => {
  return{
    surveys: state.surveys
  }
}

export default connect (mapStateToProps) (InteractiveList) ;