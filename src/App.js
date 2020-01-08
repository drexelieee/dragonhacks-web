import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SponsorForm from './forms/SponsorForm'
// import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import Landing from './landing/Landing'
import ParticipantForm from './forms/ParticipantForm'

// const theme = {
//   palette: {

//   },
//   fontFamily: ['Roboto', 'sans-serif']
// }

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <Router>
      <CssBaseline />
      <Route exact path='/' component={Landing} />
      <Route exact path='/sponsor' component={SponsorForm}></Route>
      <Route exact path='/form' component={ParticipantForm}></Route>
    </Router>
    // </ThemeProvider>
  )
}

export default App
