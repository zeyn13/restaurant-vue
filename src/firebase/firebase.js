import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcIadmutTi1UKJ3kkCyt6U3CYcwP88YQI",
  authDomain: "restaurant-vue-6954b.firebaseapp.com",
  projectId: "restaurant-vue-6954b",
  storageBucket: "restaurant-vue-6954b.appspot.com",
  messagingSenderId: "167943723101",
  appId: "1:167943723101:web:d043e66bffac21ee4dd5b4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
