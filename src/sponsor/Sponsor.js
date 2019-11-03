import React, { useState, useEffect, useRef } from 'react'
import app from '../firebaseApp'
import SponsorForm from '../forms/SponsorForm'
import styles from './Sponsor.module.css'
import StatisticCard from '../statistics/StatisticCard'
import StatisticCardRow from '../statistics/StatisticCardRow'
import SchoolIcon from '@material-ui/icons/School'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PersonIcon from '@material-ui/icons/Person'

export default function Sponsor(props) {
  let [stats, setStats] = useState({})

  useEffect(() => {
    setStats(app.functions().httpsCallable('getAnalytics')('2019'))
  }, [])

  stats = {
    attendedCount: 200,
    registeredCount: 400,
    schoolCount: 20,
    genderCount: {
      female: 80,
      male: 100
    }
  }

  return (
    <div className={styles.sponsorWrapper}>
      <StatisticCardRow>
        <StatisticCard
          content={stats.registeredCount}
          description='Registrations'
          icon={ListAltIcon}
          iconBg='#fd8783'
        />
        <StatisticCard
          content={stats.attendedCount}
          description='Participants'
          icon={PersonIcon}
          iconBg='#46d760'
        />
        <StatisticCard
          content={stats.schoolCount}
          description='Schools'
          icon={SchoolIcon}
          iconBg='#a782fd'
        />
      </StatisticCardRow>
      <SponsorForm />
    </div>
  )
}
