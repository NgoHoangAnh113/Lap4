// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBzMuurWjGel386DlMNTVs3rWMa82Bwquo",
    authDomain: "lap4-4bca8.firebaseapp.com",
    projectId: "lap4-4bca8",
    storageBucket: "lap4-4bca8.appspot.com",
    messagingSenderId: "1044586855815",
    appId: "1:1044586855815:web:26907997dea4dec535a722",
    measurementId: "G-EWB9QZFQSN"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };