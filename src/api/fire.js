import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */

    apiKey: "AIzaSyAgsa_8G4GDzY2BxacG45wtmDP7Lkkr1yY",
    authDomain: "website-973e0.firebaseapp.com",
    databaseURL: "https://website-973e0.firebaseio.com",
    projectId: "website-973e0",
    storageBucket: "website-973e0.appspot.com",
    messagingSenderId: "712425876856"
    

};
var fire = firebase.initializeApp(config);
export default fire;
