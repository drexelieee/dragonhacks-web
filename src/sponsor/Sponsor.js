import React, { useState, useEffect } from 'react'
import app from '../firebaseApp'
import SponsorForm from '../forms/SponsorForm'
import styles from './Sponsor.module.css'
import StatisticCard from '../statistics/StatisticCard'
import StatisticCardRow from '../statistics/StatisticCardRow'
import SchoolIcon from '@material-ui/icons/School'
import ListAltIcon from '@material-ui/icons/ListAlt'
import PersonIcon from '@material-ui/icons/Person'
import PublicIcon from '@material-ui/icons/Public'

export default function Sponsor(props) {
  let [stats, setStats] = useState({})

  useEffect(() => {
    async function getAnalytics() {
      setStats(
        (await app.functions().httpsCallable('getAnalytics')('2019')).data
      )
    }
    getAnalytics()
  }, [])

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
        <StatisticCard
          content={stats.countryCount}
          description='Countries'
          icon={PublicIcon}
          iconBg='#85c7fd'
        />
        {/* <StatisticCard
          content={stats.firstHackathonCount}
          description='First time hackers'
          icon={GroupAddIcon}
          iconBg='#ff8a3e'
        /> */}
      </StatisticCardRow>
      <SponsorForm />
    </div>
  )
}
