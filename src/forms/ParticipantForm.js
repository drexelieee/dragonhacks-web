import React, { useState, useEffect, useRef } from 'react'
import app from '../firebaseApp'
import styles from './ParticipantForm.module.css'
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
    flexDirection: 'column'
  },
  formInput: {
    margin: '1em',
    minWidth: 120
  }
}))

export default class ParticipantForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
  	return(
  	<form className={classes.root}>
      <TextField
        className={classes.formInput}
        label='First Name'
        variant='outlined'
        value={organization}
        onChange={event => setOrganization(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Last Name'
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
      <TextField
        className={classes.formInput}
        label='Shirt Size'
        variant='outlined'
        type='email'
        value={contactEmail}
        onChange={event => setContactEmail(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='School'
        variant='outlined'
        type='email'
        value={contactEmail}
        onChange={event => setContactEmail(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Age'
        variant='outlined'
        type='email'
        value={contactEmail}
        onChange={event => setContactEmail(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Phone Number'
        variant='outlined'
        type='email'
        value={contactEmail}
        onChange={event => setContactEmail(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Race/Ethnicity'
        variant='outlined'
        type='email'
        value={contactEmail}
        onChange={event => setContactEmail(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Current Level of Study'
        variant='outlined'
        type='email'
        value={contactEmail}
        onChange={event => setContactEmail(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Expected Graduation Year'
        variant='outlined'
        type='email'
        value={contactEmail}
        onChange={event => setContactEmail(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Gender'
        variant='outlined'
        type='email'
        value={contactEmail}
        onChange={event => setContactEmail(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Resume'
        variant='outlined'
        type='email'
        value={contactEmail}
        onChange={event => setContactEmail(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Major'
        variant='outlined'
        type='email'
        value={contactEmail}
        onChange={event => setContactEmail(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='How many hackathons have you attended?'
        variant='outlined'
        type='email'
        value={contactEmail}
        onChange={event => setContactEmail(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='Country'
        variant='outlined'
        type='email'
        value={contactEmail}
        onChange={event => setContactEmail(event.target.value)}
        required
      />
      <TextField
        className={classes.formInput}
        label='State'
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
      <Button onClick={submitForm} variant='outlined'>
        Submit
      </Button>
    </form>
  	)
  }
}
