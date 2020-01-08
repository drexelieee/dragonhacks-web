import React from 'react'
import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import facebookLogo from '../img/logos/facebook/Color/PNG/f_logo_RGB-Blue_58.png'
import twitterLogo from '../img/logos/twitter/Twitter_Logo_Blue/Twitter_Logo_Blue.svg'
import instagramLogo from '../img/logos/instagram/glyph-logo_May2016.png'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '48px',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#444'
  },
  logoLink: {
    margin: '0 10px'
  },
  logo: {
    width: 40
  }
}))

export default function Footer(props) {
  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <Link
        className={classes.logoLink}
        href='https://www.facebook.com/DragonHacksIEEE/'
      >
        <img className={classes.logo} src={facebookLogo} alt='Facebook' />
      </Link>
      <Link
        className={classes.logoLink}
        href='https://twitter.com/dragonhacksieee'
      >
        <img className={classes.logo} src={twitterLogo} alt='Twitter' />
      </Link>
      <Link
        className={classes.logoLink}
        href='https://www.instagram.com/dragonhacks_ieee/'
      >
        <img className={classes.logo} src={instagramLogo} alt='Instagram' />
      </Link>
    </footer>
  )
}
