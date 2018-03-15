import {SET_EMAIL, SET_LAST_ANSWER, SET_NAME, SET_PATH} from '../actions/questionnaireActions.js'

export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'

export const initialState = {
  isIncrementing: false,
  isDecrementing: false,
  count: 0,
  questionId: 1,
  question: '',
  answerOptions: [],
  answer: '',
  nextQuestion:1,
  answersCount:[],
  result: '',
  name:'',
  answersArray:[],
  email: '',
  path:''
}

export default (state = initialState, action) => {

  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

      case SET_EMAIL:
      console.log("Sono arrivato al reducer SET_EMAIL: " + action.data);
        return {
          ...state,
          email: action.data
        }

      case SET_LAST_ANSWER:
      var arr = state.answersArray;
      arr.push(action.data);
        return {
          ...state,
           answersArray: arr
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
