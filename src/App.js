import React from 'react'
import { useState } from 'react'
import app from './firebaseApp'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { pink, lightBlue } from '@material-ui/core/colors'
import Organizers from './component/Organizers'
import Sponsor from './sponsor/Sponsor'
import Landing from './component/Landing'
import Header from './component/Header'
import Footer from './component/Footer'
import MLHBadge from './component/MLHBadge'
import ParticipantForm from './forms/ParticipantForm'
import LoginForm from './forms/LoginForm'

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: lightBlue
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif']
  }
})

function App() {
  const [auth, setAuth] = useState(false)

  app.auth().onAuthStateChanged(user => {
    if (user) {
      setAuth(true)
    } else {
      setAuth(false)
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <MLHBadge />
      <Router>
        <CssBaseline />
        <Route path='/' component={Header} />
        <Route exact path='/' component={Landing} />
        <Route exact path='/sponsor' component={Sponsor} />
        <Route exact path='/organizers' component={Organizers} />
        <Route
          exact
          path='/register'
          component={auth ? ParticipantForm : LoginForm}
        />
        <Route path='/' component={Footer} />
      </Router>
    </ThemeProvider>
  )
}

export default App
