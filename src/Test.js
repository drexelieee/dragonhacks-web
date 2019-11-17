import React from 'react'
import app from './firebaseApp'

export default function Test(props) {
  function call() {
    const saveParticipant = app.functions().httpsCallable('saveParticipant')
    saveParticipant({
      age: -1,
      country: '',
      email: '',
      expected_graduation: new Date(),
      first_name: '',
      last_name: '',
      gender: '',
      hackathons_attended: -1,
      level_of_study: '',
      major: '',
      phone_number: '',
      race: '',
      resume: '',
      school: '',
      shirt_size: '',
      state: ''
    })
  }
  return <button onClick={call}>Test</button>
}
