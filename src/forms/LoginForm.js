import React, { useState } from 'react'
import app from '../firebaseApp'
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

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
  const [loginPage, setLoginPage] = useState(true)

  async function submitLoginForm() {
    if (loginPage) {
      try {
        let ret = await app
          .auth()
          .signInWithEmailAndPassword(username, password)
        console.log(ret)
      } catch (err) {
        console.error(err)
        alert('Error')
      }
    } else {
      try {
        await app.auth().createUserWithEmailAndPassword(username, password)
      } catch (err) {
        console.error(err)
        alert('Error')
      }
    }
  }

  return (
    <Container>
      <Typography variant='h2'>{loginPage ? 'Login' : 'Sign up'}</Typography>
      <Grid
        id='login'
        container
        className={classes.root}
        component='form'
        spacing={1}
      >
        <Grid item xs={12}>
          <TextField
            label='Email'
            type='email'
            value={username}
            onChange={event => setUsername(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='Password'
            type='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            color='primary'
            variant='contained'
            onClick={submitLoginForm}
          >
            {loginPage ? 'Login' : 'Sign up'}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <div hidden={!loginPage}>
            <Button fullWidth onClick={() => setLoginPage(false)}>
              Sign up
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}
