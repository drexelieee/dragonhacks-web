import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import * as teamNames from './teamNames.js'
// import styles from './About.module.css'
// import MdcImageList from '@material/image-list/mdc-image-list'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 650
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  }
}))

// export default class About extends React.Component {
export default function TitlebarGridList() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <h3>
        <Link to='/'>Main page</Link>
      </h3>
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key='Subheader' cols={4} style={{ height: 'auto' }}>
          <ListSubheader component='div'>IEEE Executive Board</ListSubheader>
        </GridListTile>
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
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key='Subheader' cols={2} style={{ height: 'auto' }}>
          <ListSubheader component='div'>Website Masters</ListSubheader>
        </GridListTile>
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
    </div>
  )
}
