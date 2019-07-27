import * as React from "react"
import "./AuthButton.css"
import firebase from "./firebase"
// import Google from './img/google.svg'
// import GitHub from './img/github.svg'

// const logos = {
//   Google,
//   GitHub
// }
export default class AuthButton extends React.Component {
  constructor(props: any) {
    super(props)

    switch (props.provider.id) {
      case 1:
        this.provider = new firebase.auth.GoogleAuthProvider()
        break
      case 2:
        this.provider = new firebase.auth.GithubAuthProvider()
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
    // TODO Fix this styling issue
    return (
      <div>FIXME</div>
    //   <button className={`${styles.authButton} ${styles[this.props.provider.name.toLowerCase()]}`} onClick={this.authOnClick}>
    //     <img className={styles.logo} src={logos[this.props.provider.name]} alt='' />
    //     <span className={styles.innerText}>Sign in with {this.props.provider.name}</span>
    //   </button>
    )
  }
}

export const GoogleProvider = {
  id: 1,
  name: "Google"
}
export const GitHubProvider = {
  id: 2,
  name: "GitHub"
}
