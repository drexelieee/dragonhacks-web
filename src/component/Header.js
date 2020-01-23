import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
// import { Link, IconButton, MenuItem, Menu } from '@material-ui/core'
import { Link } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'
// import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

import logo from '../img/ICONS/Logo.svg'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1
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
  // const Header = props => {
  // Make component responsive to screen size
  // const displayDropdown = () => {
  //   if (isWidthUp('sm', props.width)) {
  //     return true
  //   }
  //   return false
  // }
  // const [anchorEl, setAnchorEl] = React.useState(null)
  // const openMenu = event => {
  //   setAnchorEl(event.currentTarget)
  // }
  // const closeMenu = () => {
  //   setAnchorEl(null)
  // }

  const HomeLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ))
  const SponsorLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ))
  const AboutLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ))
  const classes = useStyles()
  return (
    <header className={classes.root}>
      <img className={classes.logo} width={32} src={logo} alt='' />
      <h1 className={classes.heading}>DragonHacks</h1>
      {/* <IconButton
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={openMenu}
      >
        <KeyboardArrowDownIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem>
          <Link component={HomeLink} to='/'>
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link component={OrganizerLink} to='/attend'>
            Organizer
          </Link>
        </MenuItem>
        <MenuItem>
          <Link component={SponsorLink} to='/sponsor'>
            Sponsor
          </Link>
        </MenuItem>
        <MenuItem>
          <Link component={AboutLink} to='/about'>
            About
          </Link>
        </MenuItem>
      </Menu> */}
      <nav>
        <ul className={classes.linkContainer}>
          <li className={classes.link}>
            <Link component={HomeLink} to='/'>
              Home
            </Link>
          </li>
          <li className={classes.link}>
            <Link component={SponsorLink} to='/sponsor'>
              Sponsor
            </Link>
          </li>
          <li className={classes.link}>
            <Link component={AboutLink} to='/about'>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

// export default withWidth()(Header)
