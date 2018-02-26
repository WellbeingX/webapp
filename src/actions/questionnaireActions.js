import fire from '../api/fire'
import ip from 'ip'
import ReactGA from 'react-ga';

export const SET_EMAIL = 'SET_EMAIL'
export const SET_LAST_ANSWER = 'SET_LAST_ANSWER'
export const SET_NAME = 'SET_NAME'


export function setEmail(data){
    return (dispatch) => {

        //Make API Call
        //For this example, I will be retrieving data from a json file
        //Get the sample data in the json file
        //delay the retrieval [Sample reasons only]
        fire.database().ref('messages/emails').push( {data} );

        console.log("setEmail Action launched");
            dispatch({type: SET_EMAIL, data:data});

    };
}

export function setLastAnswer(data){
    return (dispatch) => {

        //Make API Call
        //For this example, I will be retrieving data from a json file
        //Get the sample data in the json file
        //delay the retrieval [Sample reasons only]


        // GoogleAnalytics
        ReactGA.event({
            category: 'Questionnaire',
            action: data[0].toString(),
        });

        // Firebase recording
        var f = [
          data,
          [Date()]
        ];
        var ipAddress = '';
        fetch('//www.stupidwebtools.com/api/my_ip.json').then(function(response) {
                  if (response.status >= 400) {
                    throw new Error("Bad response from server");
                  }
                return response.json();
                }).then(function(data){
                  ipAddress = data.my_ip.ip;
                  fire.database().ref('messages/' + ipAddress.split('.').join('') ).push( {f});
                }).catch(function(error) {
                  console.log('There has been a problem with your fetch operation: ' + error.message);
                  });


                  // Redux
            dispatch({type: SET_LAST_ANSWER, data:data});

    };
}

export function setName(data){
    return (dispatch) => {

        //Make API Call
        //For this example, I will be retrieving data from a json file
        //Get the sample data in the json file
        //delay the retrieval [Sample reasons only]

        console.log("setName Action launched");

            dispatch({type: SET_NAME, data:data});

    };
}
