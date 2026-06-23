const { initializeApp, cert } = require("firebase-admin/app");

const serviceAccount = require("./serviceAccountKey.json");

const app = initializeApp({
  credential: cert(serviceAccount),
});

console.log("Firebase initialized successfully");

module.exports = app;