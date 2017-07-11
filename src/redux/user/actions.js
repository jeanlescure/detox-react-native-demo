/**
 * User Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { AsyncStorage } from 'react-native';
import { ErrorMessages, Firebase, FirebaseRef } from '@constants/';

/**
  * Login to Firebase with Email/Password
  */
export function login(formData = {}, verifyEmail = false) {
  return async (dispatch) => {
    // Send to Redux
    return dispatch({
      type: 'USER_LOGIN',
      data: {},
    });
  };
}

/**
  * Sign Up to Firebase
  */
export function signUp(formData = {}) {
  if (Firebase === null) {
    return () => new Promise((resolve, reject) =>
      reject({ message: ErrorMessages.invalidFirebase }));
  }

  const email = formData.Email || '';
  const password = formData.Password || '';
  const firstName = formData.FirstName || '';
  const lastName = formData.LastName || '';

  return () => Firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      // Setup/Send Details to Firebase database
      if (res && res.uid) {
        FirebaseRef.child(`users/${res.uid}`).set({
          firstName,
          lastName,
          signedUp: Firebase.database.ServerValue.TIMESTAMP,
          lastLoggedIn: Firebase.database.ServerValue.TIMESTAMP,
        });
      }
    });
}
