// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCABn6tD_MOAnW8dlsRSBM7Wc4YLkjxu_Q",
//   authDomain: "notification-platform-a0d98.firebaseapp.com",
//   projectId: "notification-platform-a0d98",
//   storageBucket: "notification-platform-a0d98.firebasestorage.app",
//   messagingSenderId: "441933183160",
//   appId: "1:441933183160:web:5884ea6c4976887c105c4d",
//   measurementId: "G-H1T57YPSNG"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCABn6tD_MOAnW8dlsRSBM7Wc4YLkjxu_Q",
  authDomain: "notification-platform-a0d98.firebaseapp.com",
  projectId: "notification-platform-a0d98",
  storageBucket: "notification-platform-a0d98.firebasestorage.app",
  messagingSenderId: "441933183160",
  appId: "1:441933183160:web:5884ea6c4976887c105c4d",
};

const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);