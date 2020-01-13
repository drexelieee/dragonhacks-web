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
    },
    '& svg g': {
      transform: 'translate(300px, 300px) rotate(6deg)'
      // transform: 'translate(300, 300) rotate(10, 0, 0)'
    }
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
})
export default function LandingBackground(props) {
  const classes = useStyles()
  return (
    <div>
      <div id='layer-1' className={classes.root}>
        <ReactSVG
          className={`${classes.blob1} ${classes.blob1_a}`}
          beforeInjection={svg => {
            svg.setAttribute('viewBox', '50 50 400 400')
            svg.setAttribute('height', null)
            svg.setAttribute('width', '100%')
          }}
          src='./blobs/blob_shape_1.svg'
        />
        <ReactSVG
          className={`${classes.blob1} ${classes.blob1_b}`}
          beforeInjection={svg => {
            svg.setAttribute('viewBox', '50 50 410 410')
            svg.setAttribute('height', null)
            svg.setAttribute('width', '100%')
          }}
          src='./blobs/blob_shape_1.svg'
        />
        <ReactSVG
          className={`${classes.blob1} ${classes.blob1_c}`}
          beforeInjection={svg => {
            svg.setAttribute('viewBox', '50 50 430 430')
            svg.setAttribute('height', null)
            svg.setAttribute('width', '100%')
          }}
          src='./blobs/blob_shape_1.svg'
        />
        <ReactSVG
          className={`${classes.blob1} ${classes.blob1_d}`}
          beforeInjection={svg => {
            svg.setAttribute('viewBox', '50 50 460 460')
            svg.setAttribute('height', null)
            svg.setAttribute('width', '100%')
          }}
          src='./blobs/blob_shape_1.svg'
        />
      </div>

      <div id='layer-2' className={classes.root}>
        <ReactSVG
          src='./blobs/blob_shape_2.svg'
          beforeInjection={svg => {
            svg.setAttribute('viewBox', '-60 20 390 590')
            // svg.setAttribute('viewBox', '-50 0 400 600')
            svg.setAttribute('height', null)
            svg.setAttribute('width', '100%')
          }}
          className={`${classes.blob2} ${classes.blob2_a}`}
        />

        <ReactSVG
          src='./blobs/blob_shape_2.svg'
          beforeInjection={svg => {
            svg.setAttribute('viewBox', '-100 -10 430 630')
            svg.setAttribute('height', null)
            svg.setAttribute('width', '100%')
          }}
          className={`${classes.blob2} ${classes.blob2_b}`}
        />
        <ReactSVG
          src='./blobs/blob_shape_2.svg'
          beforeInjection={svg => {
            svg.setAttribute('viewBox', '-135 -50 460 660')
            // svg.setAttribute('viewBox', '-130 -40 460 660')
            svg.setAttribute('height', null)
            svg.setAttribute('width', '100%')
          }}
          className={`${classes.blob2} ${classes.blob2_c}`}
        />
        <ReactSVG
          src='./blobs/blob_shape_2.svg'
          beforeInjection={svg => {
            svg.setAttribute('viewBox', '-170 -90 490 740')
            // svg.setAttribute('viewBox', '-150 -70 480 700')
            svg.setAttribute('height', null)
            svg.setAttribute('width', '100%')
          }}
          className={`${classes.blob2} ${classes.blob2_d}`}
        />

        <svg>
          <defs>
            <filter id='inset-shadow'>
              <feOffset dx='5' dy='-5' />
              <feGaussianBlur stdDeviation='15' result='offset-blur' />
              <feComposite
                operator='out'
                in='SourceGraphic'
                in2='offset-blur'
                result='inverse'
              />
              <feFlood flood-color='black' flood-opacity='.5' result='color' />
              <feComposite
                operator='in'
                in='color'
                in2='inverse'
                result='shadow'
              />
              <feComponentTransfer in='shadow' result='shadow'>
                <feFuncA type='linear' slope='.55' />
              </feComponentTransfer>
              <feComposite operator='over' in='shadow' in2='SourceGraphic' />
            </filter>
          </defs>
        </svg>
      </div>
      <div style={{ position: 'relative' }}>{props.children}</div>
    </div>
  )
}
