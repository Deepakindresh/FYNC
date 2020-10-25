import firebase from "firebase";

const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyDaBHXSGq2fxT6f3WqObiU_kn4VlhNzCpY",
        authDomain: "iip-project-6f2a0.firebaseapp.com",
        databaseURL: "https://iip-project-6f2a0.firebaseio.com",
        projectId: "iip-project-6f2a0",
        storageBucket: "iip-project-6f2a0.appspot.com",
        messagingSenderId: "770865597343",
        appId: "1:770865597343:web:0fbc394fec3a078573cbaa",
        measurementId: "G-Z2R0ZS0HGY"
    }
);

const auth = firebase.auth();

export {auth};