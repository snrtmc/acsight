import {ADDSURVEY, BASLA, CREATE, EDIT, ONCHANGE, CREATESURVEY, EDITSURVEY,
  LANGUAGE, DELETESURVEY} from '../actions/actionTypes';

const initState = {
    surveys : [],
    IsCreate: '',
    value:'',
    surveyId:'',
    language:{
      "_SURVEYS": "Anketler",
      "_SURVEY": "Anket",
      "_CREATE": "Oluştur",
      "_UPDATE": "Güncelle",
      "_REMOVE": "Kaldır",
      "_SURVEY_NAME": "Anket Adı"
  }
}

const rootReducer =(state=initState, action) => {
    switch (action.type) {
        case ADDSURVEY:
            return {...state, surveys: state.surveys}
        case BASLA:
            return {...state, surveys:action.payload}
        case CREATE:
          return {...state, IsCreate:action.load,value:action.value}   
        case EDIT:
          console.log(action.surveyId)
          return {...state, IsCreate:action.load, value:action.value, surveyId:action.surveyId}
        case ONCHANGE:
          return {...state, value:action.value} 
        case CREATESURVEY:
          return {...state, surveys: [...state.surveys, action.load],value:action.value}
        case EDITSURVEY:
          return {...state, surveys: action.load}
        case LANGUAGE:
           return{...state, language:action.payload}
        case DELETESURVEY:
          console.log('delete',action.payload)
          return {...state, surveys:action.payload}
        default:
            return state;
    }
}


export default rootReducer