import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { pink, lightBlue } from '@material-ui/core/colors'
import Landing from './landing/Landing'
import Sponsor from './sponsor/Sponsor'

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
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Route exact path='/' component={Landing} />
        <Route exact path='/sponsor' component={Sponsor}></Route>
      </Router>
    </ThemeProvider>
  )
}

export default App
