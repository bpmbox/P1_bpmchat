import * as firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyCsOjFyAAuFr1CITcnufG-GpZBKpLgUP90",
  authDomain: "rpa999-56929.firebaseapp.com",
  databaseURL: "https://rpa999-56929.firebaseio.com",
  projectId: "rpa999-56929",
  storageBucket: "rpa999-56929.appspot.com",
  messagingSenderId: "155298248089",
  appId: "1:155298248089:web:e25d64dc9f5370c4"
};

firebase.initializeApp(config);

export default firebase.database();
