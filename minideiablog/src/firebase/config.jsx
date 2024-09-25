import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCoOvxQhP0qWNFireIunavk3_4Am2yWyrY",
  authDomain: "miniblog-luis.firebaseapp.com",
  projectId: "miniblog-luis",
  storageBucket: "miniblog-luis.appspot.com",
  messagingSenderId: "628931082578",
  appId: "1:628931082578:web:88a5672aa868bee2c5628b",
  measurementId: "G-TD1PD588R0"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export { db };