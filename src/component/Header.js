import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link, IconButton, MenuItem, Menu } from '@material-ui/core'

import { makeStyles } from '@material-ui/styles'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'

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

// export default function Header() {
const Header = props => {
  // Make component responsive to screen size
  const [anchorEl, setAnchorEl] = React.useState(null)
  const openMenu = event => {
    setAnchorEl(event.currentTarget)
  }
  const closeMenu = () => {
    setAnchorEl(null)
  }

  const link = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ))

  function ConditionalDropdown(props) {
    let width = props.width
    let anchorEl = props.anchorEl
    if (isWidthUp('sm', width)) {
      return (
        <div>
          <nav>
            <ul className={classes.linkContainer}>
              <li className={classes.link}>
                <Link component={link} to='/'>
                  Home
                </Link>
              </li>
              <li className={classes.link}>
                <Link component={link} to='/sponsor'>
                  Sponsor
                </Link>
              </li>
              <li className={classes.link}>
                <Link component={link} to='/organizers'>
                  Organizers
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )
    }
    return (
      <div>
        <IconButton
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
          <Link component={link} to='/'>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link component={link} to='/sponsor'>
            <MenuItem>Sponsor</MenuItem>
          </Link>
          <Link component={link} to='/organizers'>
            <MenuItem>Organizers</MenuItem>
          </Link>
        </Menu>
      </div>
    )
  }

  const classes = useStyles()
  return (
    <header className={classes.root}>
      <img className={classes.logo} width={32} src={logo} alt='' />
      <h1 className={classes.heading}>DragonHacks</h1>
      <ConditionalDropdown width={props.width} anchorEl={anchorEl} />
    </header>
  )
}

export default withWidth()(Header)
