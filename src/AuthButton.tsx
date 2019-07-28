import { auth } from "firebase"
import * as React from "react"
import "./AuthButton.css"
import firebase from "./firebase"
import githubSignIn from "./img/github.svg"
import googleSignIn from "./img/google.svg"

// const logos = {
//   Google,
//   GitHub
// }

export enum AuthProvider {
  Google = "Google",
  GitHub = "GitHub"
}

interface IAuthButtonProps {
  provider: AuthProvider
}

export default class AuthButton extends React.Component<IAuthButtonProps> {
  private provider!: auth.AuthProvider
  private logo!: string

  constructor(props: IAuthButtonProps) {
    super(props)

    switch (props.provider) {
      case AuthProvider.Google:
        this.provider = new auth.GoogleAuthProvider()
        this.logo = googleSignIn
        break
      case AuthProvider.GitHub:
        this.provider = new auth.GithubAuthProvider()
        this.logo = githubSignIn
        break

      default:
        // TODO default email provider
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
        <img className="logo" src={this.logo} alt="" />
        <span className="inner-text">Sign in with {this.props.provider}</span>
      </button>
    )
  }
}
