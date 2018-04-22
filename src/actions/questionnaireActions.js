import fire from '../api/fire'
import ip from 'ip'
import ReactGA from 'react-ga';

export const SET_EMAIL = 'SET_EMAIL'
export const SET_LAST_ANSWER = 'SET_LAST_ANSWER'
export const SET_NAME = 'SET_NAME'
export const SET_PATH = 'SET_PATH'
export const SET_SESSION_START = 'SET_SESSION_START'


export function setEmail(data){
    return (dispatch) => {


        fire.database().ref('messages/emails').push( {data} );

        console.log("setEmail Action launched");
            dispatch({type: SET_EMAIL, data:data});

    };
}

export function setPath(data){
    return (dispatch) => {


        console.log("setPath Action launched");
            dispatch({type: SET_PATH, data:data});

    };
}



export function setLastAnswer(data){
    return (dispatch) => {


        // GoogleAnalytics
        ReactGA.event({
            category: data[0].toString(),
            action: data[0].toString()
        });

        // Firebase recording
        var answer = [
          data,
          [Date()]
        ];
        var ipAddress = '';
        fetch('https://freegeoip.net/json/').then(function(response) {
          console.log(response);
          console.log(JSON.stringify(response, null, 2));

                  if (response.status >= 400) {
                    throw new Error("Bad response from server");
                  }
                return response.json();
                }).then(function(data){
                  ipAddress = data.ip;
                  fire.database().ref('messages/' + ipAddress.split('.').join('') + '/' + data.sessionName).push( {answer});
                }).then(function(){
                  console.log('Answer');
                }).catch(function(error) {
                  console.log('There has been a problem with your fetch operation: ' + error.message);
                  });


                  // Redux
            dispatch({type: SET_LAST_ANSWER, data:data});

    };
}



export function setSessionStart(data){
  // This action is sent when the user first clicks on any questionnaire button on the hompege. It records on the DB the session name and the list of questions. Everything indexed under the IP address. Data contains the questions and the session name.
  return (dispatch) => {

  // GoogleAnalytics
  ReactGA.event({
      category: 'Homepage',
      action: 'Homepage'
  });


  var ipAddress = '';
  fetch('https://freegeoip.net/json/').then(function(response) {
    console.log(response);
    console.log(JSON.stringify(response, null, 2));

            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
          return response.json();
          }).then(function(data){
            ipAddress = data.ip;
            fire.database().ref('messages/' + ipAddress.split('.').join('') + '/' + data.sessionName).push( data.questions );
          }).then(function(){
            console.log('Answer');
          }).catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            });


            // Redux
      dispatch({type: SET_SESSION_START, data:data});
      };
}


export function setName(data){
    return (dispatch) => {


        console.log("setName Action launched");

            dispatch({type: SET_NAME, data:data});

    };
}
