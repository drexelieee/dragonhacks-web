import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import logo from '../img/ICONS/Logo.svg'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    top: 0,
    display: 'flex',
    alignItems: 'center'
  },
  heading: {
    display: 'inline-block',
    margin: 0,
    fontSize: '18pt'
  },
  linkContainer: {
    display: 'flex',
    listStyleType: 'none',
    paddingLeft: '16px'
  },
  link: {
    padding: '1em',
    fontSize: '14pt'
  },
  logo: {
    margin: '0 16px'
  }
})

export default function Header() {
  const HomeLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ))
  const OrganizerLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ))
  const SponsorLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ))
  const classes = useStyles()
  return (
    <header className={classes.root}>
      <img className={classes.logo} width={32} src={logo} alt='' />
      <h1 className={classes.heading}>DragonHacks</h1>
      <nav>
        <ul className={classes.linkContainer}>
          <li className={classes.link}>
            <Link component={HomeLink} to='/'>
              Home
            </Link>
          </li>
          <li className={classes.link}>
            <Link component={OrganizerLink} to='/attend'>
              Organizer
            </Link>
          </li>
          <li className={classes.link}>
            <Link component={SponsorLink} to='/sponsor'>
              Sponsor
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
