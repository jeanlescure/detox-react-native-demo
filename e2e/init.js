require('dotenv').config();
require('babel-polyfill');

const path = require('path');
const detox = require('detox');
const config = require('../package.json').detox;

// Initialize Firebase admin SDK
const admin = require('firebase-admin');
const serviceAccount = require(path.join('..', process.env.ADMIN_JSON));
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
});

// Function which allows me to delete the test user by Email
async function deleteTestUser() {
  await admin.auth()
    .getUserByEmail('test@example.com')
    .then((res) => {
      if (res && res.uid) {
        admin.auth().deleteUser(res.uid);
      }
    }).catch((err) => {
      // If the user already doesn't exist just supress the error into a warning
      console.warn(err);
    });
}

before(async () => {
  // Make sure the test user is gone before running tests
  await deleteTestUser();

  await detox.init(config);
});

after(async () => {
  await detox.cleanup();
});