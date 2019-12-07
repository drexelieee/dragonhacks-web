import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles'
import { pink, lightBlue } from '@material-ui/core/colors'
import Sponsor from './sponsor/Sponsor'
import Landing from './component/Landing'
import Header from './component/Header'
import Footer from './component/Footer'
import MLHBadge from './component/MLHBadge'
import Attend from './Attend'

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
      <MLHBadge />
      <Router>
        <CssBaseline />
        <Route path='/' component={Header} />
        <Route exact path='/' component={Landing} />
        <Route exact path='/sponsor' component={Sponsor} />
        <Route exact path='/attend' component={Attend} />
        <Route path='/' component={Footer} />
      </Router>
    </ThemeProvider>
  )
}

export default App
