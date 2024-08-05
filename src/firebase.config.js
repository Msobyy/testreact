import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDbSa1ewkLDJob5J6tBoCpH1iWfm5N-MDU",
  authDomain: "jokerlondon-1465f.firebaseapp.com",
  databaseURL: "https://jokerlondon-1465f-default-rtdb.firebaseio.com",
  projectId: "jokerlondon-1465f",
  storageBucket: "jokerlondon-1465f.appspot.com",
  messagingSenderId: "572870605868",
  appId: "1:572870605868:web:36017e8497df6fafece589",
  measurementId: "G-F8PE9VN4R5",
};

const app = initializeApp(firebaseConfig);
 const messaging = getMessaging(app);


export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BG5NnVzya5kAcbWmOZOOUE0pDsF8GnXUGfYFmGhpXp0AfMgu3LLqt_icMvYOvy1FGJXDflz4AZKs4SARsXc1bj4",
    });
    console.log("Tokennnnnnnnnn granted", token);
  }
};

export const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        resolve(payload);
      });
  });

// onMessage(messaging, (payload) => {
//   console.log("payload::::", payload);
// });
