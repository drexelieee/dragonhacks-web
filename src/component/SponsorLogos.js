import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'

// Import sponsor logo images
import tgif_logo from '../img/sponsor_logos/1_1_tgif.png'
import ieee_logo from '../img/sponsor_logos/1_2_ieee.png'
import vanguard_logo from '../img/sponsor_logos/1_3_vanguard.svg'
import lockheed_logo from '../img/sponsor_logos/1_4_lockheed.png'
import ieee_philly_logo from '../img/sponsor_logos/1_5_ieee_philly.png'
import mlh_logo from '../img/sponsor_logos/1_6_mlh.svg'
import drexel_provost_logo from '../img/sponsor_logos/1_7_drexel_provost.jpg'
import drexel_alumni_logo from '../img/sponsor_logos/2_1_drexel_alumni.png'
import drexel_admissions_logo from '../img/sponsor_logos/2_2_drexel_admissions.png'
import drexel_honors_logo from '../img/sponsor_logos/2_3_drexel_honors_college.png'
import duov_logo from '../img/sponsor_logos/2_5_duov.png'
import dig_logo from '../img/sponsor_logos/2_6_dig.png'
import promptworks_logo from '../img/sponsor_logos/2_7_promptworks.png'
import ballinger_logo from '../img/sponsor_logos/2_8_ballinger.jpg'
import monster_logo from '../img/sponsor_logos/3_1_monster.png'
import wolfram_logo from '../img/sponsor_logos/3_2_wolfram.png'
import stickermule_logo from '../img/sponsor_logos/3_3_stickermule.png'
import msp_logo from '../img/sponsor_logos/MSP.png'

const tier1 = [
  { src: tgif_logo, alt: 'TGIF' },
  { src: ieee_logo, alt: 'IEEE UP' },
  { src: vanguard_logo, alt: 'Vanguard' },
  { src: lockheed_logo, alt: 'Lockheed Martin' },
  { src: ieee_philly_logo, alt: 'IEEE Philly' },
  { src: mlh_logo, alt: 'MLH' },
  { src: drexel_provost_logo, alt: 'Drexel Provost' }
]
const tier2 = [
  { src: drexel_alumni_logo, alt: 'Drexel Alumni' },
  { src: drexel_admissions_logo, alt: 'Drexel Admissions' },
  { src: drexel_honors_logo, alt: 'Drexel Honors College' },
  { src: duov_logo, alt: 'DUOV' },
  { src: msp_logo, alt: 'Microsoft Student Partner' },
  { src: dig_logo, alt: 'DIG' },
  { src: promptworks_logo, alt: 'Promptworks' },
  { src: ballinger_logo, alt: 'Ballinger' }
]
const tier3 = [
  { src: monster_logo, alt: 'Monster Energy' },
  { src: wolfram_logo, alt: 'Wolfram' },
  { src: stickermule_logo, alt: 'Sticker Mule' }
]

const useStyles = makeStyles(theme => ({
  tier: {
    margin: '150px auto'
  }
}))

export default function SponsorLogos(props) {
  const classes = useStyles()

  const tier1Logos = tier1.map(e => {
    return (
      <Grid item lg={4} xs={12}>
        <img src={e.src} alt={e.alt} width={300} />
      </Grid>
    )
  })
  const tier2Logos = tier2.map(e => {
    return (
      <Grid item lg={4} xs={12}>
        <img src={e.src} alt={e.alt} width={200} />
      </Grid>
    )
  })
  const tier3Logos = tier3.map(e => {
    return (
      <Grid item lg={4} xs={12}>
        <img src={e.src} alt={e.alt} width={100} />
      </Grid>
    )
  })

  return (
    <React.Fragment>
      <Grid container className={classes.tier}>
        {tier1Logos}
      </Grid>
      <Grid container className={classes.tier}>
        {tier2Logos}
      </Grid>
      <Grid container className={classes.tier}>
        {tier3Logos}
      </Grid>
    </React.Fragment>
  )
}
