const firebaseConfig = {
    apiKey: "AIzaSyBK24vHZQcdYJFQDK_8F2sJwmHDwZAHj8k",
    authDomain: "camp-7ef4e.firebaseapp.com",
    projectId: "camp-7ef4e",
    storageBucket: "camp-7ef4e.firebasestorage.app",
    messagingSenderId: "609085575107",
    appId: "1:609085575107:web:a671aaacd96235b2a3f776",
    measurementId: "G-9S00LTW79G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();
