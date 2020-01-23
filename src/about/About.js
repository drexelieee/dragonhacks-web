import React from 'react'
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
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  },
  paragraph: {
    margin: '0.5em 0'
  }
}))

const About = props => {
  // Make component responsive to screen size
  const getGridListCols = () => {
    if (isWidthUp('xl', props.width)) {
      return 4
    }
    if (isWidthUp('lg', props.width)) {
      return 4
    }
    if (isWidthUp('md', props.width)) {
      return 4
    }
    if (isWidthUp('sm', props.width)) {
      return 2
    }
    return 1
  }
  const getGridListHeight = () => {
    if (isWidthUp('xl', props.width)) {
      return 400
    }

    if (isWidthUp('lg', props.width)) {
      return 400
    }

    if (isWidthUp('md', props.width)) {
      return 350
    }
    if (isWidthUp('sm', props.width)) {
      return 400
    }
    return 400
  }
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container>
        <Typography variant='h2'>
          About DragonHacks <br /> <br />
        </Typography>
        <Typography className={classes.paragraph}>
          This year is our fifth annual DragonHacks ever! Organized by Drexel
          University IEEE, we plan to bring together hackers from all around
          Philadelphia to provide an atmosphere where you can build innovative
          hardware and software projects!
        </Typography>
        <Typography variant='h3'>
          <br />
          Meet the team!
          <br />
          <br />
        </Typography>
        <Container>
          <Typography variant='h4'>IEEE Executive Board</Typography>
          <GridList
            cols={getGridListCols()}
            cellHeight={getGridListHeight()}
            className={classes.gridList}
          >
            {teamNames.execBoardData.map(tile => (
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
          <Typography variant='h4'>Website Developers</Typography>
          <GridList
            cols={getGridListCols()}
            cellHeight={getGridListHeight()}
            className={classes.gridList}
          >
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
          <GridList
            cols={getGridListCols()}
            cellHeight={getGridListHeight()}
            className={classes.gridList}
          >
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
      </Container>
    </div>
  )
}

export default withWidth()(About)
