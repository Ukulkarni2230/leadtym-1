// public/firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging.js");

// Initialize Firebase in the service worker
firebase.initializeApp({
  apiKey: "AIzaSyBbPra-28QmNqTpg-JiMXLDburEQVnfpCg",
  authDomain: "leadtym-1eb77.firebaseapp.com",
  projectId: "leadtym-1eb77",
  storageBucket: "leadtym-1eb77.appspot.com",
  messagingSenderId: "272647237960",
  appId: "1:272647237960:web:6f517979e1bb739f4a037d",
  measurementId: "G-XYMSG20ERH",
});

const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log("Received background message: ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png", // You can customize the notification icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
