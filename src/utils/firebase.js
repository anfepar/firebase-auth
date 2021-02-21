import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

const firebaseInstance = (function () {
  var _firebase = null;

  const createInstance = () => {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    var newInstance = firebase;
    return newInstance;
  };

  const getInstance = () => {
    if (!_firebase) {
      _firebase = createInstance();
    }
    return _firebase;
  };

  const createUser = (email, password) => {
    return _firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        return userCredential.user;
      })
      .catch((error) => {
        throw new Error(`New error ${error.code}: ${error.message}`);
      });
  };

  return {
    getInstance,
    createUser,
  };
})();

export default firebaseInstance;
