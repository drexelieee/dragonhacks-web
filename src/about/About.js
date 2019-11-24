import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import {
  Typography,
  Container,
  GridList,
  GridListTileBar,
  GridListTile
} from '@material-ui/core'
import * as teamNames from './teamNames.js'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 1000
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  },
  paragraph: {
    margin: '0.5em 0'
  }
}))

// export default class About extends React.Component {
const About = props => {
  // Make component responsive to screen size
  const getGridListCols = () => {
    if (isWidthUp('xl', props.width)) {
      return 4
    }

    if (isWidthUp('lg', props.width)) {
      return 3
    }

    if (isWidthUp('md', props.width)) {
      return 2
    }

    return 1
  }
  const getGridListHeight = () => {
    if (isWidthUp('xl', props.width)) {
      return 300
    }

    if (isWidthUp('lg', props.width)) {
      return 300
    }

    if (isWidthUp('md', props.width)) {
      return 200
    }

    return 300
  }
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant='h2'>About DragonHacks</Typography>
        <Typography className={classes.paragraph}>
          DragonHacks is Drexel University's 24 hour hardware-focused hackathon
          event hosted by Drexel University IEEE on Saturday, February 22 at
          2:00 PM (EST) in the Bossone Research Enterprise Center. DragonHacks
          2020 is bringing the brightest minds of the world's best schools to
          spend 24 hours to hours to create ground breaking new products from
          scratch!
        </Typography>
        <Container>
          <Typography variant='h3'>Meet the team!</Typography>
          <br />
          <Typography variant='h4'>IEEE Executive Board</Typography>
          <GridList cols={getGridListCols()} className={classes.gridList}>
            {teamNames.execBoardData.map(tile => (
              <GridListTile key={tile.imgSrc}>
                <img src={tile.imgSrc} alt={tile.name} layout-fill />
                <GridListTileBar
                  title={tile.name}
                  subtitle={<span>{tile.title}</span>}
                />
              </GridListTile>
            ))}
          </GridList>
          <br />
          <Typography variant='h4'>Website Developers</Typography>
          <GridList cellHeight={300} cols={4} className={classes.gridList}>
            {teamNames.websiteMasterData.map(tile => (
              <GridListTile key={tile.imgSrc}>
                <img src={tile.imgSrc} alt={tile.name} />
                <GridListTileBar
                  title={tile.name}
                  subtitle={<span>{tile.title}</span>}
                />
              </GridListTile>
            ))}
          </GridList>
          <br />
          <Typography variant='h4'>Committee</Typography>
          <GridList cellHeight={300} cols={4} className={classes.gridList}>
            {teamNames.committeeData.map(tile => (
              <GridListTile key={tile.imgSrc}>
                <img src={tile.imgSrc} alt={tile.name} />
                <GridListTileBar
                  title={tile.name}
                  subtitle={<span>{tile.title}</span>}
                />
              </GridListTile>
            ))}
          </GridList>
        </Container>
        <h3>
          <Link to='/'>Main page</Link>
        </h3>
      </Container>
    </div>
  )
}

export default withWidth()(About)
