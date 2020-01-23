import React, { useEffect } from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import anime from 'animejs'

const useStyles = makeStyles(theme => ({
  prefix: {
    color: '#ffffff63'
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    // fontWeight: 700,
    fontWeight: 'lighter',
    margin: '.5em 0',
    fontSize: '4rem',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.8rem'
    },
    backgroundColor: '#292931',
    color: '#ffccec',
    // color: '#fca2db',
    // color: '#e5da93',
    // color: 'white',
    borderRadius: 4,
    padding: '15px 40px',
    boxShadow: '0 0 10px 2px #36363669'
    // width: '100%'
  },
  textWrapper: {
    position: 'relative',
    display: 'inline-block',
    paddingTop: '0.1em',
    paddingRight: '0.5em',
    paddingBottom: '.15em'
  },
  letters: {},
  letter: {},
  line: {
    opacity: 0,
    position: 'absolute',
    left: 0,
    height: '100%',
    width: 3,
    backgroundColor: '#fca2db85',
    // backgroundColor: '#d5c5cf',
    // backgroundColor: '#b8b6a9',
    // backgroundColor: '#89825a',
    // backgroundColor: '#e5da93',
    // backgroundColor: 'black',
    transformOrigin: '0 50%'
  },
  line1: {
    top: 0,
    left: 0
  }
}))

export default function Title(props) {
  const classes = useStyles()

  useEffect(() => {
    const animation = anime
      .timeline()
      .add({
        targets: `.${classes.title} .${classes.line}`,
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 700,
        delay: 1000
      })
      .add({
        targets: `.${classes.title} .${classes.line}`,
        translateX: [
          0,
          document
            .querySelector(`.${classes.title} .${classes.letters}`)
            .getBoundingClientRect().width + 10
        ],
        easing: 'easeOutExpo',
        duration: 700,
        delay: 100
      })
      .add(
        {
          targets: `.${classes.title} .${classes.letter}`,
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 700,
          delay: (el, i) => 22 * (i + 1)
        },
        '-=755'
      )
    animation.complete = () =>
      anime.timeline({ loop: true }).add({
        targets: `.${classes.title} .${classes.line}`,
        keyframes: [{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }],
        duration: 1600,
        easing: 'easeOutExpo'
      })
  }, [classes.letter, classes.letters, classes.line, classes.title])

  return (
    // <h1 className={classes.title}>
    <div className={classes.wrapper}>
      <Typography className={classes.title} variant='h1'>
        <span className={classes.prefix}>${'  '}</span>
        <span className={classes.textWrapper}>
          <span className={`${classes.line} ${classes.line1}`}></span>
          <span className={classes.letters}>
            {'Login with Love'.split('').map((letter, i) => (
              <span key={i} className={classes.letter}>
                {letter}
              </span>
            ))}
          </span>
        </span>
      </Typography>
    </div>
    // {/* </h1> */}
  )
}
