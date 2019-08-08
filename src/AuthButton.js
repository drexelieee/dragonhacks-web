import React from 'react'
import { auth } from 'firebase'
import app from './firebaseApp'
import classNames from 'classnames/bind'

import styles from './AuthButton.module.css'
import githubSignIn from './img/github.svg'
import googleSignIn from './img/google.svg'

const classes = classNames.bind(styles)

// Authentication providers
export const GOOGLE = 'google'
export const GITHUB = 'github'

export default class AuthButton extends React.Component {
  constructor(props) {
    super(props)
    this.authOnClick = this.authOnClick.bind(this)
  }

  authOnClick() {
    var provider
    switch (this.props.provider) {
      case GOOGLE:
        provider = auth.GoogleAuthProvider()
        break
      case GITHUB:
        provider = auth.GithubAuthProvider()
        break
      default:
      // TODO email provider
    }
    app
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        console.log(result)
      })
  }

  render() {
    var logo
    switch (this.props.provider) {
      case GOOGLE:
        logo = googleSignIn
        break
      case GITHUB:
        logo = githubSignIn
        break
      default:
      // TODO email provider
    }
    const btnClasses = classes(styles.authButton, {
      [styles.google]: this.props.provider === GOOGLE,
      [styles.github]: this.props.provider === GITHUB
    })
    return (
      <button className={btnClasses} onClick={this.authOnClick}>
        <img className={styles.logo} src={logo} alt='' />
        <span>Sign in with {this.props.provider}</span>
      </button>
    )
  }
}
