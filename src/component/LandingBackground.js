import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ReactSVG } from 'react-svg'

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    width: '100%'
    // overflow: 'hidden'
  },
  blob1: {
    height: '100%',
    width: '1000px',
    position: 'absolute',
    top: '-500px',
    left: '-650px',
    '& svg g path': {
      fill: 'rgba(255, 131, 209, 0.57)'
    }
  },
  blob2: {
    height: '100%',
    width: '1000px',
    float: 'right',
    '& svg g path': {
      fill: 'rgb(255, 131, 209)'
    }
  },
  blob3: {
    position: 'absolute',
    top: '0%',
    left: '150%',
    '& svg g path': {
      fill: '#ed7278'
    }
  },
  blob4: {
    position: 'absolute',
    top: '-40%',
    left: '0%',
    '& svg g path': {
      fill: '#ae5eac'
    }
  }
})
export default function LandingBackground(props) {
  const classes = useStyles()
  return (
    <div>
      <div id='layer-1' className={classes.root}>
        {/* <ReactSVG src='./blobs/blob_shape_2.svg' className={classes.blob2} /> */}
      </div>
      <div id='layer-2' className={classes.root}>
        <ReactSVG
          className={classes.blob1}
          beforeInjection={svg => {
            svg.setAttribute('viewBox', '50 50 400 400')
            svg.setAttribute('height', null)
            svg.setAttribute('width', '100%')
          }}
          src='./blobs/blob_shape_1.svg'
        />
        <ReactSVG
          src='./blobs/blob_shape_2.svg'
          beforeInjection={svg => {
            svg.setAttribute('viewBox', '-50 0 400 400')
            svg.setAttribute('height', null)
            svg.setAttribute('width', '100%')
          }}
          className={classes.blob2}
        />
        {/* <ReactSVG src='./blobs/blob_shape_3.svg' className={classes.blob3} />
        <ReactSVG src='./blobs/blob_shape_4.svg' className={classes.blob4} /> */}
      </div>
      <div style={{ position: 'relative' }}>{props.children}</div>
    </div>
  )
}
