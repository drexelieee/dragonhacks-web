import React, { useState, useEffect, useRef } from 'react'
import app from '../firebaseApp'
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Button,
  Checkbox,
  FormControlLabel,
  CheckBoxOutlineBlankIcon,
  CheckBoxIcon
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  formInput: {
    margin: '1em',
    minWidth: 120
  },
  button: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  header: {
    fontSize: 32,
    display: 'flex',
    justifyContent: 'center'
  },
  checkboxes: {
    justifyContent: 'center',
    marginBottom: 12
  }
}))

export default function ParticipantForm(props) {
  const [package_, setPackage] = useState('')

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
  const [resume, setResume] = useState('')
  const [major, setMajor] = useState('')
  const [hackathonsAttended, setHackathonsAttended] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')

  const [labelWidth, setLabelWidth] = useState(0)
  const packageInputLabel = useRef(null)
  useEffect(() => {
    setLabelWidth(packageInputLabel.current.offsetWidth)
  }, [])

  function submitForm(event) {
    const submitSponsorForm = app.functions().httpsCallable('submitSponsorForm')
    const data = {
      firstName,
      lastName,
      email,
      shirtSize,
      school,
      age,
      phoneNumber,
      ethnicity,
      levelOfStudy,
      gradYear,
      gender,
      resume,
      major,
      hackathonsAttended,
      country,
      state
    }
    submitSponsorForm(data)
  }

  const classes = useStyles()

  return(
    <div>
      <h1 className={classes.header}>Register</h1>
      <form className={classes.root}>
      <TextField
        className={classes.formInput}
        label='First Name'
        variant='outlined'
        value={firstName}
        onChange={event => setFirstName(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Last Name'
        variant='outlined'
        value={lastName}
        onChange={event => setLastName(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Email'
        variant='outlined'
        type='email'
        value={email}
        onChange={event => setEmail(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Shirt Size'
        variant='outlined'
        type='email'
        value={shirtSize}
        onChange={event => setShirtSize(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='School'
        variant='outlined'
        type='email'
        value={school}
        onChange={event => setSchool(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Age'
        variant='outlined'
        type='email'
        value={age}
        onChange={event => setAge(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Phone Number'
        variant='outlined'
        type='email'
        value={phoneNumber}
        onChange={event => setPhoneNumber(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Race/Ethnicity'
        variant='outlined'
        type='email'
        value={ethnicity}
        onChange={event => setEthnicity(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Current Level of Study'
        variant='outlined'
        type='email'
        value={levelOfStudy}
        onChange={event => setLevelOfStudy(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Expected Graduation Year'
        variant='outlined'
        type='email'
        value={gradYear}
        onChange={event => setGradYear(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Gender'
        variant='outlined'
        type='email'
        value={gender}
        onChange={event => setGender(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Resume'
        variant='outlined'
        type='email'
        value={resume}
        onChange={event => setResume(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Major'
        variant='outlined'
        type='email'
        value={major}
        onChange={event => setMajor(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='How many hackathons have you attended?'
        variant='outlined'
        type='email'
        value={hackathonsAttended}
        onChange={event => setHackathonsAttended(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Country'
        variant='outlined'
        type='email'
        value={country}
        onChange={event => setCountry(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='State'
        variant='outlined'
        type='email'
        value={state}
        onChange={event => setState(event.target.value)}
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
      <FormControlLabel className={classes.checkboxes} control={
        <Checkbox
        value="checkedI"
      />
      } label="Code of Conduct"
      // labelPlacement="start"
      >
      </FormControlLabel>
      <FormControlLabel className={classes.checkboxes} control={
        <Checkbox
        value="checkedI"
      />
      } label="Private Policy"
      // labelPlacement="start"
      >
      </FormControlLabel>
      <Button className={classes.button} onClick={submitForm} variant='outlined'>
        Register
      </Button>
    </form>
    </div>
  )
}
