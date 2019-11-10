import React from 'react'
import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: theme.palette.secondary.dark
  }
}))

export default function Footer(props) {
  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <Link href='https://www.facebook.com/DragonHacksIEEE/'>Facebook</Link>
      <Link href='https://twitter.com/dragonhacksieee'>Twitter</Link>
      <Link href='https://www.instagram.com/dragonhacks_ieee/'>Instagram</Link>
    </footer>
  )
}
