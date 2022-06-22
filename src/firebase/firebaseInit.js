import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC64JbiaoHiESkwvRV--bTrabF0GkbMGjQ",
  authDomain: "fireblogspt.firebaseapp.com",
  projectId: "fireblogspt",
  storageBucket: "fireblogspt.appspot.com",
  messagingSenderId: "185142680007",
  appId: "1:185142680007:web:6c5775846090b605c9e1e2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();