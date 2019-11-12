import * as firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDt10t0F8lMO53Zb9DJV67zSK6aygZSRSg',
  authDomain: 'rodbook-d5dc3.firebaseapp.com',
  databaseURL: 'https://rodbook-d5dc3.firebaseio.com',
  projectId: 'rodbook-d5dc3',
  storageBucket: 'rodbook-d5dc3.appspot.com',
  messagingSenderId: '141499012621',
  appId: '1:141499012621:web:0500232ef0ee063a',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
