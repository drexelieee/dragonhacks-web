import React, { useState, useEffect } from 'react'
import {
  TextField,
  makeStyles,
  Button,
  CircularProgress
} from '@material-ui/core'
import app from './firebaseApp'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  text: {
    margin: 'auto',
    marginTop: '20px',
    width: '400px'
  },
  button: {
    margin: 'auto',
    marginTop: '20px',
    width: '400px'
  },
  error: {
    color: 'red',
    fontSize: '40px',
    fontWeight: 'bold',
    margin: 'auto',
    marginTop: '20px',
    textAlign: 'center'
  },
  success: {
    color: 'green',
    fontSize: '40px',
    fontWeight: 'bold',
    margin: 'auto',
    marginTop: '20px',
    textAlign: 'center'
  },
  loader: {
    margin: 'auto',
    marginTop: '20px'
  }
})

export default function Attend(props) {
  const classes = useStyles()
  const [auth, setAuth] = useState(false)
  const [pass, setPass] = useState('')
  const [error, setError] = useState()

  const [loading, setLoading] = useState(false)

  const [attendError, setAttendError] = useState()
  const [attendSuccess, setAttendSuccess] = useState()

  async function onClick() {
    // attempt to log user in
    try {
      await app
        .auth()
        .signInWithEmailAndPassword('teamdragonhacks@gmail.com', pass)

      setAuth(true)
    } catch (e) {
      console.error(e)
      setError(e.message)
    }
  }

  app.auth().onAuthStateChanged(user => {
    if (user) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  })

  // if authenticated, attend user
  useEffect(() => {
    async function attend() {
      const id = window.location.hash.substr(1) // remove #
      setLoading(true)
      const res = await app.functions().httpsCallable('attend')(id)
      setLoading(false)
      if (res.success) {
        if (res.waitlisted) {
          setAttendSuccess('Waitlisted. You may now close the tab')
        } else {
          setAttendSuccess('Success. You may now close the tab')
        }
      } else {
        setAttendError(`Failed to attend user: ${id}`)
      }
    }
    if (auth) {
      attend()
    }
  }, [auth])

  return (
    <div className={classes.root}>
      {!auth && (
        <>
          <TextField
            className={classes.text}
            type='password'
            value={pass}
            label='Password'
            variant='outlined'
            onChange={d => {
              setPass(d.target.value)
              setError(null)
            }}
            error={error != null}
            helperText={error}
          />
          <Button
            className={classes.button}
            color='primary'
            variant='contained'
            onClick={onClick}
          >
            Submit
          </Button>
        </>
      )}
      {loading && <CircularProgress className={classes.loader} />}
      {attendError != null && (
        <div className={classes.error}>{attendError}</div>
      )}
      {attendSuccess != null && (
        <div className={classes.success}>{attendSuccess}</div>
      )}
    </div>
  )
}
