import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// TODO: Consider moving these to environment variables for security
const firebaseConfig = {
    apiKey: "AIzaSyB2QfsFWPikZq5t5kBT5LgBhoRVez4pt34", // Replace with your actual API key if different
    authDomain: "web-server-afe0c.firebaseapp.com",
    databaseURL: "https://web-server-afe0c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "web-server-afe0c",
    storageBucket: "web-server-afe0c.appspot.com",
    messagingSenderId: "1234567890", // Replace with your actual Sender ID if different
    appId: "1:1234567890:web:abcdef123456" // Replace with your actual App ID if different
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
console.log(database);

export { database };