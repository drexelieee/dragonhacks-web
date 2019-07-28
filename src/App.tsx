import * as React from "react"
import AuthButton, { AuthProvider } from "./AuthButton"
import SponsorForm from "./forms/SponsorForm"

function App() {
  return (
    <div>
      <h2>Sponsor Us</h2>
      <SponsorForm />
      <AuthButton provider={AuthProvider.Google} />
    </div>
  )
}

export default App
