import React, { useState, useEffect, useRef } from 'react'
import app from '../firebaseApp'
import SponsorForm from '../forms/SponsorForm'
import styles from './Sponsor.module.css'

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
      <h1>Statistics from last year</h1>
      <p className={styles.statistic}>
        <strong>{stats.registeredCount} </strong>
        registrations
      </p>
      <p className={styles.statistic}>
        <strong>{stats.attendedCount} </strong>
        participants from over
        <strong> {stats.schoolCount} </strong>
        different schools
      </p>
      <SponsorForm />
    </div>
  )
}
