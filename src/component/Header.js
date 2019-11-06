import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@material-ui/core'
// import { makeStyles } from '@material-ui/styles'

export default function Header() {
  const HomeLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ))
  const FAQLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ))
  const SponsorLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ))
  const ContactLink = React.forwardRef((props, ref) => (
    <RouterLink innerRef={ref} {...props} />
  ))
  return (
    <header>
      <h1>DragonHacks</h1>
      <nav>
        <ul>
          <li>
            <Link component={HomeLink} to='/#login'></Link>
          </li>
          <li>
            <Link component={FAQLink} to='/#faq'></Link>
          </li>
          <li>
            <Link component={SponsorLink} to='/#sponsor'></Link>
          </li>
          <li>
            <Link component={ContactLink} to='/#contact'></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
