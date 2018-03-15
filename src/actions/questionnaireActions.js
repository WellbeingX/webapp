import fire from '../api/fire'
import ip from 'ip'
import ReactGA from 'react-ga';

export const SET_EMAIL = 'SET_EMAIL'
export const SET_LAST_ANSWER = 'SET_LAST_ANSWER'
export const SET_NAME = 'SET_NAME'
export const SET_PATH = 'SET_PATH'


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

export function setPath(data){
    return (dispatch) => {

        //Make API Call
        //For this example, I will be retrieving data from a json file
        //Get the sample data in the json file
        //delay the retrieval [Sample reasons only]

        console.log("setPath Action launched");
            dispatch({type: SET_PATH, data:data});

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
        console.log('Proviamo questo');
        fetch('//www.geoplugin.net/json.gp?jsoncallback=?').then(function(response) {
          console.log(response);
          console.log(JSON.stringify(response, null, 2));

                  if (response.status >= 400) {
                    throw new Error("Bad response from server");
                  }
                // return response.json();
                }).then(function(data){
                  console.log('Ora mando l IP :');
                  console.log( data);
                  // ipAddress = data.my_ip.ip;
                  // fire.database().ref('messages/' + ipAddress.split('.').join('') ).push( {f});
                }).then(function(){
                  console.log('Dovrebbe essere andato tutto bene');
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
