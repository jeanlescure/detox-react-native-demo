/**
 * User Reducer
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

// Set initial state
const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN': {
      if (action.data) {
        const input = action.data;
        return {
          ...state,
          uid: input.uid,
          email: input.email,
          emailVerified: input.emailVerified,
        };
      }
      return {};
    }
    case 'USER_LOGOUT': {
      return {};
    }
    default:
      return {};
  }
}
