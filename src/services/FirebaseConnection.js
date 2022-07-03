import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC_4djbDstybI86sNt_J99U1E-NW0AlrbM",
    authDomain: "sistemachamados-503ae.firebaseapp.com",
    projectId: "sistemachamados-503ae",
    storageBucket: "sistemachamados-503ae.appspot.com",
    messagingSenderId: "192503654601",
    appId: "1:192503654601:web:d2318bf953cf2426004518",
    measurementId: "G-XQFCRRDT8T"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
