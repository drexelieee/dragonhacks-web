import firebase from 'firebase/app'
import 'firebase/functions'
import 'firebase/auth'
import 'firebase/firestore'

let app = firebase.initializeApp({
  apiKey: 'AIzaSyAQAzPzS7SQqbyO-Tjg4WrtjApd7SMAH9M',
  authDomain: 'dragonhacks-web.firebaseapp.com',
  databaseURL: 'https://dragonhacks-web.firebaseio.com',
  projectId: 'dragonhacks-web',
  storageBucket: 'dragonhacks-web.appspot.com',
  messagingSenderId: '287317729268',
  appId: '1:287317729268:web:f427de4cfd2ab971'
})

if (process.env.REACT_APP_ENV === 'development') {
  app.functions().useFunctionsEmulator('http://localhost:5001')
}

export default app
