import fire from '../api/fire'
import ip from 'ip'
import ReactGA from 'react-ga';
import Amplify, { API } from 'aws-amplify';

export const SET_EMAIL = 'SET_EMAIL'
export const SET_LAST_ANSWER = 'SET_LAST_ANSWER'
export const SET_NAME = 'SET_NAME'
export const SET_PATH = 'SET_PATH'
export const SET_SESSION_START = 'SET_SESSION_START'
export const SET_BACK_BUTTON = 'SET_BACK_BUTTON'
export const SET_RESET_QUESTIONNAIRE = 'SET_RESET_QUESTIONNAIRE'
export const SET_RESULTS = 'SET_RESULTS'




export function setEmail(data){
    return (dispatch) => {
        fire.database().ref('messages/emails').push( {data} );
            dispatch({type: SET_EMAIL, data:data});

    };
}

export function setPath(data){
    return (dispatch) => {

            dispatch({type: SET_PATH, data:data});

    };
}



export function setLastAnswer(data){
    return (dispatch) => {

      // Firebase recording
      var answer = data;
      let sessionName = data.sessionName;
      let questionId = data.entry.questionId;


        // GoogleAnalytics
        ReactGA.event({
            category: data.entry.questionId.toString(),
            action: data.entry.questionId.toString()
        });

        var ipAddress = '1.1.1.1';
        fetch('https://freegeoip.net/json/').then(function(response) {
                  if (response.status >= 400) {
                    throw new Error("Bad response from server");
                  }
                return response.json();
                }).then(function(data){
                  ipAddress = data.ip;
                  fire.database().ref('messages/' + ipAddress.split('.').join('') + '/' + sessionName + '/' + questionId).set( answer);
                  fire.database().ref('messages/' + ipAddress.split('.').join('') + '/latest/' + answer.entry.questionLabel).set( answer);
                }).catch(function(error) {
                  console.log(answer[0]);
                  console.log('There has been a problem with your fetch operation: ' + error.message);
                  });


                  // Redux
            dispatch({type: SET_LAST_ANSWER, data:data});

            // let apiName = 'BetterSpaceAPI'; // replace this with your api name.
            // let path = 'https://ovrtdwnyv5.execute-api.eu-west-2.amazonaws.com/dev'; //replace this with the path you have configured on your API
            // let myInit = {
            //     body: {hello:'hi'}, // replace this with attributes you need
            //     headers: {} // OPTIONAL
            // }
            //
            // API.post(apiName, path, myInit).then(response => {
            //     // Add your code here
            //     console.log('AWS running');
            // }).catch(error => {
            //   console.log('AWS does not work');
            //     console.log(error.response)
            // });
    };
}

export function setBackButton(){
    return (dispatch) => {
            dispatch({type: SET_BACK_BUTTON});

    };
}

export function setResetQuestionnaire(){
    return (dispatch) => {
        console.log("reset Action");
            dispatch({type: SET_RESET_QUESTIONNAIRE});

    };
}

export function setSessionStart(data){
  // This action is sent when the user first clicks on any questionnaire button on the hompege. It records on the DB the session name and the list of questions. Everything indexed under the IP address. Data contains the questions and the session name.
  return (dispatch) => {
    let answer = data;
  // GoogleAnalytics
  ReactGA.event({
      category: 'Homepage',
      action: 'Homepage'
  });


  var ipAddress = '';
  fetch('https://freegeoip.net/json/').then(function(response) {


            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
          return response.json();
          }).then(function(data){
            ipAddress = data.ip
            fire.database().ref('messages/' + ipAddress.split('.').join('') + '/ipData').set( [data.country_code, data.zip_code, data.city] );
          }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            });


            // Redux
      dispatch({type: SET_SESSION_START, data:data});
      };
}


export function setName(data){
    return (dispatch) => {
            dispatch({type: SET_NAME, data:data});

    };
}


export function setResults(data){
    return (dispatch) => {
            dispatch({type: SET_RESULTS, data:data});

    };
}
