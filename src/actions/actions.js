import {ADDSURVEY, BASLA, CREATE, ONCHANGE, CREATESURVEY, EDITSURVEY, LANGUAGE,
    DELETESURVEY} from './actionTypes';
 


export const addSurvey = () => (
     {
        type:ADDSURVEY,
    })


    export const basla = () => (
        {
           type:BASLA,
       })
   export const create = () => (
       {
           type:CREATE,
       }
   )
   export const onChange = () => (
    {
        type:ONCHANGE,
    }
)
export const createSurvey = () => (
    {
        type:CREATESURVEY,
    }
)
export const editSurvey = () => (
    {
        type:EDITSURVEY,
    }
)
export const language = () => (
    {
        type:LANGUAGE,
    }
)
export const deleteSurvey = () => (
    {
        type:DELETESURVEY,
    }
)

   