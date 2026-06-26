importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCABn6tD_MOAnW8dlsRSBM7Wc4YLkjxu_Q",
  authDomain: "notification-platform-a0d98.firebaseapp.com",
  projectId: "notification-platform-a0d98",
  storageBucket: "notification-platform-a0d98.firebasestorage.app",
  messagingSenderId: "441933183160",
  appId: "1:441933183160:web:5884ea6c4976887c105c4d",
});

const messaging =
  firebase.messaging();