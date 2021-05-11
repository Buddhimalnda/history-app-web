import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBQCS0swFRqjTey9iMScIEmdwbzC17jAOs",
    authDomain: "history-app-bb570.firebaseapp.com",
    projectId: "history-app-bb570",
    storageBucket: "history-app-bb570.appspot.com",
    messagingSenderId: "458156866409",
    appId: "1:458156866409:web:68539e720b13130edd5bf8",
    measurementId: "G-PBFY779C7Y"
};

firebase.initializeApp(firebaseConfig);

const fs = firebase.firestore();
const auth = firebase.auth();
const db = firebase.database();
const storage = firebase.storage()

export { fs, auth, db, storage }

export default firebaseConfig;