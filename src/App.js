import React from 'react'
import SponsorForm from './forms/SponsorForm'
// import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

// const theme = {
//   palette: {

//   },
//   fontFamily: ['Roboto', 'sans-serif']
// }

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      <h2>Sponsor Us</h2>
      <SponsorForm />
    </React.Fragment>
    // </ThemeProvider>
  )
}

export default App
