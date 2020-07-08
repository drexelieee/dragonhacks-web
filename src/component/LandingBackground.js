import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ReactSVG } from 'react-svg'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    width: '100%'
    // overflow: 'hidden'
  },
  root_2: {
    position: 'absolute',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
    // overflow: 'hidden'
  },
  blob1: {
    height: '100%',
    width: '1000px',
    position: 'absolute',
    filter: 'drop-shadow(2px 4px 6px rgba(20, 20, 20, .1))',
    top: '-500px',
    left: '-650px',
    '& svg g path': {
      fill: 'rgba(255, 131, 209, 1)'
      // fill: 'rgba(255, 131, 209, 0.3)'
    }
  },
  blob1_a: {
    filter: 'drop-shadow(2px 4px 6px rgba(20, 20, 20, .2))'
  },
  blob1_b: {
    '& svg g path': {
      fill: 'rgb(251, 136, 209)'
    }
  },
  blob1_c: {
    '& svg g path': {
      fill: 'rgb(250, 146, 212)'
    }
  },
  blob1_d: {
    '& svg g path': {
      fill: 'rgb(252, 162, 219)'
    }
  },
  blob2: {
    height: '100%',
    width: '1000px',
    right: 0,
    position: 'absolute',
    filter: 'url(#inset-shadow)',
    // filter: 'drop-shadow(2px 4px 6px rgba(20, 20, 20, .1))',
    '& svg g path': {
      fill: 'rgb(255, 131, 209)'
    }
    // '& svg g': {
    //   transform: 'translate(300px, 300px) rotate(6deg)'
    //   // transform: 'translate(300, 300) rotate(10, 0, 0)'
    // }
  },
  blob2_a: {
    filter: 'none'
  },
  blob2_b: {
    '& svg g path': {
      fill: 'rgb(252, 122, 204)'
      // fill: 'rgb(248, 112, 198)'
      // fill: 'rgb(245, 117, 198)'
    }
  },
  blob2_c: {
    '& svg g path': {
      fill: 'rgb(239, 111, 192)'
      // fill: 'rgb(241, 103, 191)'
      // fill: 'rgb(245, 101, 192)'
      // fill: 'rgb(252, 106, 198)'
    }
  },
  blob2_d: {
    '& svg g path': {
      fill: 'rgb(231, 112, 188)'
      // fill: 'rgb(231, 105, 184)'
      // fill: 'rgb(225, 94, 177)'
    }
  }
}))
export default function LandingBackground(props) {
  const classes = useStyles()
  const backgroundStyle={
background:"url(/images/hero-background.jpg",
backgroundRepeat:"no-repeat",
backgroundSize:"contain",
color:"white"

  }


  return (
    <div style={backgroundStyle} >
      <div style={{ position: 'relative' }}>{props.children}</div>
    </div>
  )
}
