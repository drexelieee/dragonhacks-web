import React from 'react'
import styles from './StatisticCardRow.module.css'

export default function StatisticCardRow(props) {
  return <div className={styles.statisticCardRow}>{props.children}</div>
}
