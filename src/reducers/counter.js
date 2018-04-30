import {SET_EMAIL, SET_LAST_ANSWER, SET_NAME, SET_PATH, SET_SESSION_START, SET_BACK_BUTTON, SET_RESET_QUESTIONNAIRE} from '../actions/questionnaireActions.js'

export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'


export const initialState = {
  sessionName: '',
  count: 0,
  questionId: 0,
  question: '',
  answerOptions: [],
  answer: '',
  nextQuestion:1,
  answersCount:[],
  result: '',
  name:'',
  answersArray:[],
  email: '',
  path:'',
  pathQuestion:'/inforation/recover'
}

export default (state = initialState, action) => {

  switch (action.type) {
      case SET_SESSION_START:
        return {
          ...state,
          sessionName: action.data.sessionName
        }
      case SET_EMAIL:
        return {
          ...state,
          email: action.data
        }
      case SET_LAST_ANSWER:
        var arr = state.answersArray;
        arr.push(action.data);
        return {
          ...state,
           answersArray: arr,
           questionId: state.questionId + 1
        }
        case SET_NAME:
          return {
            ...state,
             name: action.data
          }
        case SET_PATH:
          return {
            ...state,
             path: action.data
          }
        case SET_BACK_BUTTON:
          if(state.questionId>0){
            var arr = state.answersArray;
            arr.pop();
          return {
            ...state,
            answersArray: arr,
            questionId: state.questionId-1
          }}else{return{
            ...state,
            questionId: 0
          }}
        case SET_RESET_QUESTIONNAIRE:
          return {
            ...state,
            questionId: 1
          }
    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}
