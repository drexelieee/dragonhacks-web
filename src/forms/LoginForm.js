import React, { useState } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import AuthButton, { GOOGLE, GITHUB } from '../component/AuthButton'

const useStyles = makeStyles({
  root: {
    maxWidth: '450px',
    margin: 'auto'
  }
})

export default function LoginForm(props) {
  const classes = useStyles()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  return (
    <Grid container className={classes.root} component='form' spacing={1}>
      <Grid item xs={12}>
        <TextField
          label='Username'
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          label='Password'
          type='password'
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth={true} color='primary' variant='contained'>
          Login/Signup
        </Button>
      </Grid>
      <Grid item xs={6}>
        <AuthButton provider={GITHUB} />
      </Grid>
      <Grid item xs={6}>
        <AuthButton provider={GOOGLE} />
      </Grid>
    </Grid>
  )
}
