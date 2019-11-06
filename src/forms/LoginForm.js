import React, { useState } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import AuthButton, { GOOGLE, GITHUB } from '../component/AuthButton'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '20em',
    margin: 'auto'
  },
  formInput: {
    margin: '0.5em'
  },
  loginActions: {
    margin: '2em 0'
  }
})

export default function LoginForm(props) {
  const classes = useStyles()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  return (
    <form className={classes.root}>
      <TextField
        className={classes.formInput}
        label='Username'
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <TextField
        className={classes.formInput}
        label='Password'
        type='password'
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <Grid className={classes.loginActions}>
        <Button
          className={classes.formInput}
          fullWidth={true}
          color='primary'
          variant='contained'
        >
          Login/Signup
        </Button>
        <AuthButton provider={GITHUB} />
        <AuthButton provider={GOOGLE} />
      </Grid>
    </form>
  )
}
