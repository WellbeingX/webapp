export const SET_EMAIL = 'SET_EMAIL'
export const SET_LAST_ANSWER = 'SET_LAST_ANSWER'
export const SET_NAME = 'SET_NAME'


export function setEmail(data){
    return (dispatch) => {

        //Make API Call
        //For this example, I will be retrieving data from a json file
        //Get the sample data in the json file
        //delay the retrieval [Sample reasons only]
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

        console.log("setLastAnswer Action launched");

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
