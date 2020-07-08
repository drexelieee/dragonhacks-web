import React from "react";
import {Typography,Container,Link} from "@material-ui/core"
import { makeStyles } from '@material-ui/styles'
const YEAR = 2020
// Probably worth making these Date objects
const START_DATE = 'Saturday, February 22'
const START_TIME = '2:00 PM (EST)'
const END_DATE = 'Sunday, February 23'
const END_TIME = '2:00 PM (EST)'

const useStyles = makeStyles(theme => ({
  root: {},
  login: {
    textAlign: 'center'
  },
  faq: {
    '& h4': {
      margin: '0.3em 0',
      fontSize: '14pt'
    }
  },
  paragraph: {
    // margin: '0.5em 0'
    margin: '1em'
  },
  heading: {
    marginTop: '2em',
    marginBottom: '.5em'
  },
  register: {
    width: '12em',
    height: '60px',
    fontSize: '24px',
    borderRadius: '30px',
    marginTop: '1em'
  },
  svgWrap: {
    float: 'right',
    // background: 'red',
    shapeOutside:
      'polygon(0 73px, 223px 73px, 383px 418px, 167px 208px, 0px 100px)',
    height: '370px',
    width: '420px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  container: {
    padding: '0 80px',
    maxWidth: 'unset',
    [theme.breakpoints.down('sm')]: {
      padding: '0 40px'
    }
  },
  about: {
    marginTop: '200px',
    [theme.breakpoints.down('sm')]: {
      marginTop: '100px'
    }
  },
  aboutButton: {
    fontSize: '20px',
    width: '6em',
    height: '60px',
    margin: 'auto 0.7em',
    borderRadius: '30px'
  }
}))

const About=(props)=>{
const classes =useStyles()
  return (
    <Container className={`${classes.container} ${classes.about}`}>
    <div className={classes.svgWrap}></div>
    <Typography variant='h3' className={classes.heading}>
      About
    </Typography>
    <Typography className={classes.paragraph}>
      DragonHacks is Drexel University's official 24-hour student-run
      hackathon organized by Drexel IEEE on Saturday, February 22 at 2:00
      PM (EST) in the{' '}
      <Link href='https://goo.gl/maps/fbyGaxVvUMCDfvtj9'>
        Bossone Research Enterprise Center
      </Link>
      . DragonHacks {YEAR} is bringing the brightest minds of the world's
      best schools to spend 24 hours to hours to create ground breaking
      new products from scratch!
    </Typography>
    <Typography className={classes.paragraph}>
      We will have more than enough East coast exclusive food and caffeine
      to energize hungry and excited hackers. Your sleepless efforts will
      be rewarded with swag and other goodies!
    </Typography>
    <Typography className={classes.paragraph}>
      Hacking begins at {START_TIME} on {START_DATE} right after the
      opening ceremony and ends at {END_TIME} on {END_DATE}. You must
      submit your project on Devpost. In order to be eligible for prizes,
      you also must demonstrate your project.
    </Typography>
  </Container>

  )
}
export default About