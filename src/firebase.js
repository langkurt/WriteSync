import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import 'firebase/auth';
import 'firebase/firestore';

/**
 * Firebase configuration
 *
 * In the context of Firebase, the API key is an identifier for your app,
 * not a secret. Therefore, it's OK to check it into source control.
 * https://firebase.google.com/docs/projects/api-keys#general-info.
 * */
const firebaseConfig = {
    apiKey: "AIzaSyBZc8gtKmDRhqlMKbvt135-DW5qNIjAWck",
    authDomain: "writesync-7f5c2.firebaseapp.com",
    projectId: "writesync-7f5c2",
    storageBucket: "writesync-7f5c2.appspot.com",
    messagingSenderId: "249885941236",
    appId: "1:249885941236:web:ab1cd322dfb87263e8eda1",
    measurementId: "G-JP174C9YLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase auth and firestore services for use in other parts of the app
export const auth = firebase.auth();
export const firestore = firebase.firestore();