import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database'; 


const config ={
        apiKey: "AIzaSyAEcbMi3DOD2ALtsn-UgMnnkBhSMkQh0Mw",
        authDomain: "champions-1a403.firebaseapp.com",
        databaseURL: "https://champions-1a403.firebaseio.com",
        projectId: "champions-1a403",
        storageBucket: "",
        messagingSenderId: "938038477653"
}
firebase.initializeApp(config); 

const firebaseDB = firebase.database();

const firebaseMatches= firebaseDB.ref('matches');
const firebasePromotions= firebaseDB.ref('promotions');

export {
    firebase, 
    firebaseMatches,
    firebasePromotions
}