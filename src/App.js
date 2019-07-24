import React from 'react'
import firebase from 'firebase' // Importing the entire firebase sdk isn't recommended
import firebaseConfig from './firebaseConfig'

import SponsorForm from './forms/SponsorForm'

export const app = firebase.initializeApp(firebaseConfig)
function App () {
  return (
    <div>
      <SponsorForm/>
    </div>
  )
}

export default App
