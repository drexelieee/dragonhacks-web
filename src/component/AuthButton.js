import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import firebase from 'firebase'
import 'firebase/auth'
import githubLogo from '../img/github.png'
import googleLogo from '../img/google.svg'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center'
  }
})

// Authentication providers
export const GOOGLE = 'Google'
export const GITHUB = 'GitHub'

// function authOnClick() {
//   app
//     .auth()
//     .signInWithPopup(provider)
//     .then(result => {
//       console.log(result)
//     })
// }

export default function AuthButton(props) {
  const classes = useStyles()
  // eslint-disable-next-line no-unused-vars
  var provider, icon
  switch (props.provider) {
    case GOOGLE:
      provider = new firebase.auth.GoogleAuthProvider()
      icon = googleLogo
      break
    case GITHUB:
      provider = new firebase.auth.GithubAuthProvider()
      icon = githubLogo
      break
    default:
    // Email auth
  }

  const node = <img src={icon} alt='' width='32' />
  return (
    <Button className={classes.root} startIcon={node} variant='outlined'>
      Sign in with {props.provider}
    </Button>
  )
}
