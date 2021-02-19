import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCXGTyBf67iu507Uza55JP6eTYHo8rlZgs",
    authDomain: "catch-of-the-day-rob4130.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-rob4130-default-rtdb.europe-west1.firebasedatabase.app/",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
