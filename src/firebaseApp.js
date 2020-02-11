import firebase from 'firebase/app'
import 'firebase/functions'
import 'firebase/auth'
import 'firebase/firestore'

let app = firebase.initializeApp({
  apiKey: 'AIzaSyAxS4fEOuTRiKbrQV7zd0B3_Zot0KZo_so',
  authDomain: 'dragonhacks-web-dev.firebaseapp.com',
  databaseURL: 'https://dragonhacks-web-dev.firebaseio.com',
  projectId: 'dragonhacks-web-dev',
  storageBucket: 'dragonhacks-web-dev.appspot.com',
  messagingSenderId: '389172751187',
  appId: '1:389172751187:web:d2a2090416fb608b'
})

if (process.env.REACT_APP_ENV === 'development') {
  console.log('DEVELOPMENT MODE ENABLED')
  console.log('Running functions on local emulator')
  app.functions().useFunctionsEmulator('http://localhost:5001')
}

export default app
