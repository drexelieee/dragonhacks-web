import * as React from "react"
import SponsorForm from "./forms/SponsorForm"
import AuthButton, { AuthProvider } from "./AuthButton";

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
