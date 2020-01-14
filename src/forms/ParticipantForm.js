import React, { useState } from 'react'
import app from '../firebaseApp'
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Container,
  Typography,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Link
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  formContent: {
    margin: '2em auto',
    maxWidth: 'fit-content'
  },
  registerButton: {
    margin: 'auto',
    height: '4em',
    borderRadius: '40px'
  }
}))

export default function ParticipantForm(props) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [shirtSize, setShirtSize] = useState('')
  const [school, setSchool] = useState('')
  const [age, setAge] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [ethnicity, setEthnicity] = useState('')
  const [levelOfStudy, setLevelOfStudy] = useState('')
  const [gradYear, setGradYear] = useState('')
  const [gender, setGender] = useState('')
  const [major, setMajor] = useState('')
  const [hackathonsAttended, setHackathonsAttended] = useState('')
  const [country, setCountry] = useState('')
  const [consent, setConsent] = useState(false)

  function submitForm(event) {
    const saveParticipant = app.functions().httpsCallable('saveParticipant')
    const data = {
      age,
      country,
      email,
      expected_graduation: gradYear,
      first_name: firstName,
      last_name: lastName,
      gender,
      hackathons_attended: hackathonsAttended,
      level_of_study: levelOfStudy,
      major,
      phone_number: phoneNumber,
      race: ethnicity,
      school,
      shirt_size: shirtSize
    }
    if (consent) {
      saveParticipant(data)
    } else {
      alert('Consent to the MLH Code of Conduct is required')
    }
  }
  const classes = useStyles()

  return (
    <Container maxWidth='lg'>
      <Typography variant='h2'>Registration</Typography>
      <form>
        <Grid container spacing={2} className={classes.formContent}>
          <Grid item xs={12} sm={6}>
            <TextField
              label='First Name'
              variant='outlined'
              value={firstName}
              onChange={event => setFirstName(event.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label='Last Name'
              variant='outlined'
              value={lastName}
              onChange={event => setLastName(event.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label='Email'
              variant='outlined'
              type='email'
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth required>
              <InputLabel htmlFor='shirt-size-select'>Shirt Size</InputLabel>
              <Select
                variant='outlined'
                value={shirtSize}
                onChange={event => setShirtSize(event.target.value)}
                inputProps={{
                  name: 'shirt-size',
                  id: 'shirt-size-select'
                }}
              >
                <MenuItem value='S'>Small</MenuItem>
                <MenuItem value='M'>Medium</MenuItem>
                <MenuItem value='L'>Large</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label='School'
              variant='outlined'
              value={school}
              onChange={event => setSchool(event.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label='Age'
              variant='outlined'
              type='number'
              value={age}
              onChange={event => setAge(event.target.value)}
              required
              fullWidth
              inputProps={{
                min: 18
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label='Phone Number'
              variant='outlined'
              type='tel'
              value={phoneNumber}
              onChange={event => setPhoneNumber(event.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl required fullWidth>
              <InputLabel>Ethnicity</InputLabel>
              <Select
                variant='outlined'
                value={ethnicity}
                onChange={event => setEthnicity(event.target.value)}
              >
                <MenuItem value='white'>White</MenuItem>
                <MenuItem value='black'>Black</MenuItem>
                <MenuItem value='asian'>Asian</MenuItem>
                <MenuItem value='other'>Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl required fullWidth>
              <InputLabel>Level of Study</InputLabel>
              <Select
                variant='outlined'
                value={levelOfStudy}
                onChange={event => setLevelOfStudy(event.target.value)}
              >
                <MenuItem value='freshman'>Freshman</MenuItem>
                <MenuItem value='sophomore'>Sophomore</MenuItem>
                <MenuItem value='junior'>Junior</MenuItem>
                <MenuItem value='senior'>Senior</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label='Expected Graduation Year'
              variant='outlined'
              type='number'
              value={gradYear}
              onChange={event => setGradYear(event.target.value)}
              required
              fullWidth
              inputProps={{
                min: 2020
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl required fullWidth>
              <InputLabel>Gender</InputLabel>
              <Select
                variant='outlined'
                value={gender}
                onChange={event => setGender(event.target.value)}
              >
                <MenuItem value='male'>Male</MenuItem>
                <MenuItem value='female'>Female</MenuItem>
                <MenuItem value='other'>Other</MenuItem>
                <MenuItem value='no_answer'>Prefer not to answer</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label='Major'
              variant='outlined'
              value={major}
              onChange={event => setMajor(event.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label='Hackathons attended'
              variant='outlined'
              type='number'
              value={hackathonsAttended}
              onChange={event => setHackathonsAttended(event.target.value)}
              required
              fullWidth
              inputProps={{
                min: 0
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label='Country'
              variant='outlined'
              value={country}
              onChange={event => setCountry(event.target.value)}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={event => setConsent(event.target.checked)}
                />
              }
              label={
                <Typography variant='body1'>
                  I have read and agree to the{' '}
                  <Link href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>
                    MLH Code of Conduct
                  </Link>
                  . I authorize you to share my application/registration
                  information for event administration, ranking, MLH
                  administration, pre- and post-event informational e-mails, and
                  occasional messages about hackathons in-line with the the{' '}
                  <Link href='https://mlh.io/privacy'>MLH Privacy Policy</Link>.
                  I further agree to the terms of both the{' '}
                  <Link href='https://github.com/MLH/mlh-policies/tree/master/prize-terms-and-conditions'>
                    MLH Contest Terms and Conditions{' '}
                  </Link>
                  and the{' '}
                  <Link href='https://mlh.io/privacy'>MLH Privacy Policy</Link>.
                </Typography>
              }
            />
          </Grid>
          <Grid container item xs={12} sm={4}>
            <Button
              className={classes.registerButton}
              onClick={submitForm}
              variant='contained'
              fullWidth
              color='primary'
            >
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}
