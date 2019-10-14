import React from 'react'
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

export default class ParticipantForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
  	return(
  	<form>
      <TextField></TextField>
      <TextField></TextField>
      <TextField></TextField>
      <TextField></TextField>
      <TextField></TextField>
    </form>
  	)
  }
}