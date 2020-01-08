import React from 'react'
import styles from './StatisticCard.module.css'
import { lighten } from '@material-ui/core/styles'

export default function StatisticCard(props) {
  const Icon = props.icon
  return (
    <div className={styles.statisticCard}>
      <div
        className={styles.statisticIconContainer}
        style={{ backgroundColor: lighten(props.iconBg, 0.8) }}
      >
        <Icon style={{ color: props.iconBg }} />
      </div>
      <strong className={styles.statisticContent}>
        {props.content != null ? (
          props.content
        ) : (
          <div className={styles.loading} />
        )}
      </strong>
      <div className={styles.statisticDescription}>{props.description}</div>
    </div>
  )
}
