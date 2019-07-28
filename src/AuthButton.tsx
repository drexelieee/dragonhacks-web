import * as React from "react"
import firebase from "./firebase"
import { auth } from "firebase";
import "./AuthButton.css"
import './img/google.svg'
import './img/github.svg'

// const logos = {
//   Google,
//   GitHub
// }

export enum AuthProvider {
  Google = "Google",
  GitHub = "GitHub"
}

interface AuthButtonProps {
  provider: AuthProvider
}

export default class AuthButton extends React.Component<AuthButtonProps> {
  private provider!: auth.AuthProvider;

  constructor(props: AuthButtonProps) {
    super(props)

    switch (props.provider) {
      case AuthProvider.Google:
        this.provider = new auth.GoogleAuthProvider()
        break
      case AuthProvider.GitHub:
        this.provider = new auth.GithubAuthProvider()
        break

      default:
        break
    }

    this.authOnClick = this.authOnClick.bind(this)
  }

  public authOnClick() {
    firebase.auth().signInWithPopup(this.provider).then((result) => {
      console.log(result)
    })
  }

  public render() {
    return (
      <button className={`auth-button ${this.props.provider.toLowerCase()}`} onClick={this.authOnClick}>
        <img className="logo" src={`img/${this.props.provider.toLowerCase()}.svg`} alt='' />
        <span className="inner-text">Sign in with {this.props.provider}</span>
      </button>
    )
  }
}
