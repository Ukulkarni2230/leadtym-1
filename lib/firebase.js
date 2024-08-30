// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getDatabase,
  ref,
  set,
  onDisconnect,
  onValue,
  off,
} from "firebase/database";
// import { getDatabase, ref,  } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBbPra-28QmNqTpg-JiMXLDburEQVnfpCg",
  authDomain: "leadtym-1eb77.firebaseapp.com",
  databaseURL: "https://leadtym-1eb77-default-rtdb.firebaseio.com",
  projectId: "leadtym-1eb77",
  storageBucket: "leadtym-1eb77.appspot.com",
  messagingSenderId: "272647237960",
  appId: "1:272647237960:web:6f517979e1bb739f4a037d",
  measurementId: "G-XYMSG20ERH",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const messaging = getMessaging(app);

export { app, auth, database, ref, set, onDisconnect, onValue, off };

export const getFcmToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey:
        "BNEvD-jWKrK2_gLFmd9XjukMqt2Ctp8flsjL1Mcq0ssg-SZLfYNGYu_ils77XAPMZp-SZrFiX9QMCWTLqUmhCfo",
    });

    if (currentToken) {
      console.log("FCM Token:", currentToken);
      return currentToken;
    } else {
      console.error(
        "No registration token available. Request permission to generate one."
      );
      return null;
    }
  } catch (error) {
    console.error("An error occurred while retrieving token. ", error);
    return null; // Return null if there's an error
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Message received: ", payload);
      resolve(payload);
    });
  });
