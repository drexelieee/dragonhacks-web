import React from 'react';
import firebase from "firebase";
import { firebaseConfig } from "./firebaseCreds.secret";
import './App.css';
import AuthButton, { GoogleProvider, GitHubProvider } from './AuthButton';

export const app = firebase.initializeApp(firebaseConfig);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AuthButton provider={GoogleProvider}/>
        <AuthButton provider={GitHubProvider}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
