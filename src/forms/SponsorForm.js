import React, { useState, useEffect, useRef } from 'react'
import app from '../firebaseApp'
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '75%',
    margin: 'auto'
  },
  formInput: {
    margin: '1em',
    minWidth: 120
  },
  title: {
    textAlign: 'center'
  },
  submit: {
    margin: 'auto',
    display: 'block'
  }
}))

export default function SponsorForm(props) {
  const [organization, setOrganization] = useState('')
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [package_, setPackage] = useState('')
  const [donation, setDonation] = useState(0)
  const [message, setMessage] = useState('')

  // This ugliness is necessary so a line is not drawn through the select outline
  const [labelWidth, setLabelWidth] = useState(0)
  const packageInputLabel = useRef(null)
  useEffect(() => {
    setLabelWidth(packageInputLabel.current.offsetWidth)
  }, [])
  // *****

  const classes = useStyles()

  function submitForm(event) {
    const submitSponsorForm = app.functions().httpsCallable('submitSponsorForm')
    const data = {
      contactName,
      contactEmail,
      organization,
      package: package_,
      donation,
      message
    }
    submitSponsorForm(data)
  }

  return (
    <form className={classes.root}>
      <h1 className={classes.title}>Sponsor Form</h1>
      <TextField
        className={classes.formInput}
        label='Organization Name'
        variant='outlined'
        value={organization}
        onChange={event => setOrganization(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Name'
        variant='outlined'
        value={contactName}
        onChange={event => setContactName(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Email'
        variant='outlined'
        type='email'
        value={contactEmail}
        onChange={event => setContactEmail(event.target.value)}
        required
      />
      <FormControl variant='outlined' className={classes.formInput}>
        <InputLabel ref={packageInputLabel}>Package</InputLabel>
        <Select
          value={package_}
          onChange={event => setPackage(event.target.value)}
          input={<OutlinedInput labelWidth={labelWidth} id='package-input' />}
        >
          <MenuItem value=''>Uncertain</MenuItem>
          <MenuItem value='bronze'>Bronze</MenuItem>
          <MenuItem value='silver'>Silver</MenuItem>
          <MenuItem value='gold'>Gold</MenuItem>
          <MenuItem value='platinum'>Platinum</MenuItem>
        </Select>
      </FormControl>
      <TextField
        className={classes.formInput}
        label='Donation'
        variant='outlined'
        type='number'
        value={donation}
        onChange={event => setDonation(event.target.value)}
      />
      <TextField
        className={classes.formInput}
        label='Message'
        variant='outlined'
        value={message}
        onChange={event => setMessage(event.target.value)}
      />
      <Button
        className={classes.submit}
        onClick={submitForm}
        variant='outlined'
      >
        Submit
      </Button>
    </form>
  )
}
