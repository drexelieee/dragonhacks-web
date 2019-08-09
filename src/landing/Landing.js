import React from 'react'
import app from '../firebaseApp'
import styles from './Landing.module.css'

export default class Landing extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
  	return(
  		<div>
  			<center>
	  			<div className={styles.landing}>
	  				<h1>DRAGONHACKS 2020</h1>
	  				<h3>WHAT: Drexel's very own 24-hour hackathon!</h3>
	  				<h3>WHERE: Bossone Research Enterprise Center</h3>
	  				<h3>WHEN: February 22-23</h3>
	  			</div>
	  			<div className={styles.normal}>
	  				<h1>ABOUT</h1>
	  				<p>DragonHacks is Drexel University's 24 hour hardware-focused hackathon event hosted by Drexel University IEEE in 2019 in the Bossone Research Enterprise Center. DragonHacks 2019 is bringing in the brightest minds of the world's best schools to spend 24 hours to create ground breaking new products from scratch!</p>
	  				<p>We will have more than enough East coast exclusive food and caffeine to energize hungry and excited hackers. Your sleepless efforts will be rewarded with swag and other goodies!</p>
	  				<p>Hacking begins at 2 PM on Saturday, April 20th right after the opening ceremony and ends at 2 PM on Sunday, April 21st. You must submit your project on Devpost. In order to be eligible for prizes, you also must demonstrate your project.</p>
	  			</div>
	  			<div className={styles.colored}>
	  				<h1>SCHEDULE</h1>
	  			</div>
	  			<div className={styles.normal}>
	  				<h1>FAQ</h1>
	  			</div>
	  			<div className={styles.colored}>
	  				<h1>SPONSORS</h1>
	  			</div>
  			</center>
  		</div>
  		)
  }
}