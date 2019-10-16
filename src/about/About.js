import React from 'react'
import { Link } from 'react-router-dom'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import execBoardData from './teamNames.js'
import styles from './About.module.css'
// import MdcImageList from '@material/image-list/mdc-image-list'

export default class About extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <h3>Executive board</h3>
        <GridList cellHeight={180} className={styles.gridList}>
          <GridListTile key='Subheader' cols={2} style={{ height: 'auto' }}>
            <ListSubheader component='div'></ListSubheader>
          </GridListTile>
          {execBoardData.map(tile => (
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
}
