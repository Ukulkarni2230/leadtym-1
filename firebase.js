import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

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
export const messaging = getMessaging(app);

export const getFcmToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey:
        "BCvvT6MquHWuRtJSBcUDZohBRa4obXT_Fc-nbrfVgQZ50_1xDKn6NaYgga4iLlo3itIb8lTRsfC2lbMopd7qjjM",
    });
    if (token) {
      return token;
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
      return null;
    }
  } catch (error) {
    console.error("An error occurred while retrieving the FCM token. ", error);
    return null;
  }
};
