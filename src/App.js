import React, {useEffect} from 'react';
import './App.css';
import DenseAppBar from './appbar';
import InteractiveList from './list'
import IconLabelButtons from './button'
import BasicTextFields from './input'
import {useDispatch,useSelector} from 'react-redux'





 function App() {
   const dispacth = useDispatch();
   const   IsCreate = useSelector((state) => state.IsCreate)
   const value = useSelector((state) => state.value)
   const surveyID = useSelector((state) => state.surveyId)
   
   const surveys = useSelector((state) => state.surveys)
   const language= useSelector((state) => state.language)
/*   useEffect(() => {
    /* async function fetchData() {
      const result = await postData('https://coresurveymvc.appspot.com/api/Survey')
      console.log(result)
    }
    fetchData() */
    async function postData(url = '') {
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

    async function postData(url = '') {
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
    

   async function dataHandler() {
    const data = await postData('https://coresurveymvc.appspot.com/api/Survey')
    
    dispacth({
      type:'BASLA',
      payload:data
    })
   }
   
    
   /* createSurvey('https://coresurveymvc.appspot.com/api/Survey') */
    /* const result = await postData('https://coresurveymvc.appspot.com/api/Survey')
    console.log(result) */
    // Update the document title using the browser API

/*   },[]); */ 
useEffect (() => {
  dataHandler()
},[])



const clickHandler = () => {
  dispacth({
    type:'CREATE',
    load:'CREATE',
    value:''
  })
}
const createHandler = (text) => {
  if (text == '') {
    alert('please enter the name of the survey')
  }else{
    async function createSurvey(url = '') {
      const survey = {
        "Name": text,
      }
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzb25lcmF0bWFjYTAwQGdtYWlsLmNvbSIsImp0aSI6ImNmNWM1ZTcwLWI4ZTgtNGM3NS1hMjlmLWYyYWFmODNjYjk2MyIsIm5iZiI6MTU5NzE3NzM1OCwiZXhwIjoxNTk5NzY5MzU4LCJpc3MiOiJodHRwczovL2NvcmVzdXJ2ZXlhcGkuYXBwc3BvdC5jb20vIiwiYXVkIjoiaHR0cHM6Ly9jb3Jlc3VydmV5YXBpLmFwcHNwb3QuY29tLyJ9.10NOpdnFJg2sVr7Y-llXvaaJop_cx8xoQAi52YEag8o'
        },
        body: JSON.stringify(survey)
      });
      const res = await response.json()
      if(res.ID <=  0){
        alert('create operation is not succesful')
      }
      dispacth({
        type:'CREATESURVEY',
        load:res,
        value:''
      })
      
//      return response.json(); // parses JSON response into native JavaScript objects
    }

    createSurvey('https://coresurveymvc.appspot.com/api/Survey')
  }
}

const editHandler = (id, text) => {
  if (text == '') {
    alert('please enter the name of the survey')
  }else{
    async function editSurvey(url = '') {
      const survey = {
        "ID":id,
        "Name": text,
      }
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzb25lcmF0bWFjYTAwQGdtYWlsLmNvbSIsImp0aSI6ImNmNWM1ZTcwLWI4ZTgtNGM3NS1hMjlmLWYyYWFmODNjYjk2MyIsIm5iZiI6MTU5NzE3NzM1OCwiZXhwIjoxNTk5NzY5MzU4LCJpc3MiOiJodHRwczovL2NvcmVzdXJ2ZXlhcGkuYXBwc3BvdC5jb20vIiwiYXVkIjoiaHR0cHM6Ly9jb3Jlc3VydmV5YXBpLmFwcHNwb3QuY29tLyJ9.10NOpdnFJg2sVr7Y-llXvaaJop_cx8xoQAi52YEag8o'
        },
        body: JSON.stringify(survey)
      });
      const res = await response.json()
     
      
//      return response.json(); // parses JSON response into native JavaScript objects
    }

    editSurvey('https://coresurveymvc.appspot.com/api/Survey/' + id )
  }
 
 let newSurveyList = [...surveys]
 newSurveyList.map((item,i) => {
    if (item.ID == id) {
      newSurveyList[i].Name=text
    }
  })
  console.log(newSurveyList)
  dispacth({
    type:'EDITSURVEY',
    load:newSurveyList
  })
}





let rightPanel = null
 if(IsCreate== 'CREATE'){
  rightPanel = (
    <div>
      <BasicTextFields/>
      <IconLabelButtons text={language._CREATE} onClick={() => createHandler(value)} />
    </div>
  )
} 
if (IsCreate =='EDIT'){
  rightPanel = (
    <div>
      <BasicTextFields value={value}/>
      <IconLabelButtons text={language._UPDATE} onClick={() => editHandler(surveyID,value)}/>
    </div>
  )
}

  return (
    <div className="App">
      <DenseAppBar/>
      
      <div className="panels">
        <div className="left">
          <IconLabelButtons text={language._CREATE} onClick={() => clickHandler()}/>
          <InteractiveList />
        </div>
        <div className="right">
        {
          rightPanel
        }  
        </div>
      </div>
    </div>
  );
}

export default App;
