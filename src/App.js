import React from 'react'
import firebase from 'firebase' // Importing the entire firebase sdk isn't recommended
import firebaseConfig from './firebaseConfig'
import './App.css'
import AuthButton, { GoogleProvider, GitHubProvider } from './AuthButton'

export const app = firebase.initializeApp(firebaseConfig)
function App () {
  return (
    <div className='App'>
      <h1>Dev site</h1>
      <header className='App-header'>
        <AuthButton provider={GoogleProvider} />
        <AuthButton provider={GitHubProvider} />
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
