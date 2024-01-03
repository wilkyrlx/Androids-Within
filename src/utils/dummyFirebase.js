import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// This file demonstrates what the firebase.js file would look like 

const firebaseConfig = {
    // add your config here
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// export default database;