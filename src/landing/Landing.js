import React from 'react'
// import app from '../firebaseApp'
import styles from './Landing.module.css'

export default class Landing extends React.Component {
  render() {
  	return(
  		<div>
  			<center>
	  			<div className={styles.landing}>
	  				<h1 className={styles.landingHeader}>DRAGONHACKS 2020</h1>
	  				<h3>WHAT: Drexel's very own 24-hour hackathon!</h3>
	  				<h3>WHERE: Bossone Research Enterprise Center</h3>
	  				<h3>WHEN: February 22<sup>nd</sup>-23<sup>rd</sup></h3>
	  			</div>
	  			<div className={styles.about}>
	  				<h1 className={styles.lobsterFont}>ABOUT</h1>
	  				<p>DragonHacks is Drexel University's 24 hour hardware-focused hackathon event hosted by Drexel University IEEE in 2019 in the Bossone Research Enterprise Center. DragonHacks 2019 is bringing in the brightest minds of the world's best schools to spend 24 hours to create ground breaking new products from scratch!</p>
	  				<p>We will have more than enough East coast exclusive food and caffeine to energize hungry and excited hackers. Your sleepless efforts will be rewarded with swag and other goodies!</p>
	  				<p>Hacking begins at 2 PM on Saturday, April 20th right after the opening ceremony and ends at 2 PM on Sunday, April 21st. You must submit your project on Devpost. In order to be eligible for prizes, you also must demonstrate your project.</p>
	  			</div>
	  			<div className={styles.schedule}>
	  				<h1 className={styles.lobsterFont}>SCHEDULE</h1>
	  				<div className={styles.scheduleBlock}>
	  				<h2>SATURDAY</h2>
	  					<table>
	  						<thead>
		  						<tr className={styles.scheduleRowCell}>
		  							<th>Time</th>
		  							<th>Event</th>
		  						</tr>
	  						</thead>
	  						<tbody>
	  							<tr>
	  								<td>9:00 AM</td>
	  								<td>Registration</td>
	  							</tr>
	  							<tr>
	  								<td>11:00 AM</td>
	  								<td>Team Building 1</td>
	  							</tr>
	  							<tr>
	  								<td>12:00 AM</td>
	  								<td>Team Building 2</td>
	  							</tr>
	  							<tr>
	  								<td>1:00 PM</td>
	  								<td>Lunch and Network</td>
	  							</tr>
	  						</tbody>
	  					</table>
	  				</div>
	  				<div className={styles.scheduleBlock}>
	  				<h2>SUNDAY</h2>
	  					<table>
	  						<thead>
		  						<tr>
		  							<th>Time</th>
		  							<th>Event</th>
		  						</tr>
	  						</thead>
	  						<tbody>
	  							<tr>
	  								<td>12:00 AM</td>
	  								<td>Entertainment</td>
	  							</tr>
	  							<tr>
	  								<td>1:00 AM</td>
	  								<td>Midnight Pizza</td>
	  							</tr>
	  							<tr>
	  								<td>2:00 AM</td>
	  								<td>FAQ Bot Workshop</td>
	  							</tr>
	  							<tr>
	  								<td>9:00 AM</td>
	  								<td>Breakfast</td>
	  							</tr>
	  						</tbody>
	  					</table>
	  				</div>
	  			</div>
	  			<div className={styles.faq}>
	  				<h1 className={styles.lobsterFont}>FAQ</h1>
	  				<div>
		  				<h2 className={styles.lobsterFont}>Is there a code of conduct?</h2>
		  				<p>Yes. Abide by the MLH Code of Conduct.</p>
	  				</div>
	  				<div>
		  				<h2 className={styles.lobsterFont}>What should I bring to the hackathon?</h2>
		  				<p>A valid student ID, laptop, charger, and whatever makes you comfortable or supports your coding activities (keyboard, mouse, etc.).</p>
	  				</div>
	  				<div>
		  				<h2 className={styles.lobsterFont}>Do you provide any hardware?</h2>
		  				<p>Yes! Here is the list of hardware MLH will be providing during DragonHacks 2019: MLH Hardware. We will also be providing our own hardware which can be found on the DragonHacks Hardware List.</p>
	  				</div>
	  				<div>
		  				<h2 className={styles.lobsterFont}>Are there prizes?</h2>
		  				<p>There are plenty of prizes to be won at DragonHacks 2019! You will have the opportunity to compete in plenty of challenges for a chance to win: Xbox Ones, PS4s, GoPros, Apple Watches, Samsung LED TVs, Nintendo Switches, iPad Airs, and way more! First place gets first choice of prizes with each member in the winning team choosing one prize from the list, down to the last DragonHacks challenge winners. All projects must be submitted on Devpost in order to be eligible for judging.</p>
	  				</div>
	  				<div>
		  				<h2 className={styles.lobsterFont}>How do we submit our projects?</h2>
		  				<p>All submissions will be due on Sunday at 2 PM on the DragonHacks 2019 Devpost site. We highly recommend you submit at 1:30 PM to give yourself some wiggle room for any last-minute technical issues. All projects must be submitted on Devpost in order to be eligible for judging and prizes!</p>
	  				</div>
	  				<div>
		  				<h2 className={styles.lobsterFont}>I don't have a team or idea :( What should I do?</h2>
		  				<p>If you do not currently have a team or idea, do not fear! Many hackers come in without teams or ideas. There are two methods to find teammates, and trust us, hacking with a team is a lot more fun! Team sizes have to be 2–5 people. You should be invited to the official DragonHacks 2019 Slack Group where we have a #teamformation channel dedicated to team formations. We will also be holding a team formation event before the kickoff and opening ceremony. Also check out the DragonHacks 2019 Devpost challenges for inspiration on what problems to tackle.</p>
	  				</div>
	  				<div>
		  				<h2 className={styles.lobsterFont}>What challenges are there?</h2>
		  				<p>On top of the usual first, second, and third places, we also have challenges like best healthcare hack, funniest hack, hack with the best design or name — not everything is fully technical! We also have sponsor challenges from JetBrains, .tech, Wolfram, Lockheed Martin, Close School of Entrepreneurship, GLOBO, and more! The full list of challenges are listed in the Official DragonHacks 2019 Devpost.</p>
	  				</div>
	  				<div>
		  				<h2 className={styles.lobsterFont}>Who can join?</h2>
		  				<p>DragonHacks is open to all university students (undergrad/grad). High school students are welcome as well so long as they are 18 years of age or older. No prior hackathon or hardware experience is necessary.</p>
	  				</div>
	  				<div>
		  				<h2 className={styles.lobsterFont}>How is the application process?</h2>
		  				<p>Just register on the site! If space becomes limited, we will review applications. Registration is individual and teams can be formed the day of the event.</p>
	  				</div>
	  				<div>
		  				<h2 className={styles.lobsterFont}>How much will this cost me?</h2>
		  				<p>Attendance is free. Dinner, lunch, breakfast, drinks, and snacks are on us! As well as T-shirts and other swag. We will be having free demos from companies. The only thing that you are responsible for is transportation.</p>
	  				</div>
	  				<div>
		  				<h2 className={styles.lobsterFont}>When and where is it?</h2>
		  				<p>TBD</p>
	  				</div>
	  			</div>
	  			<div className={styles.sponsors}>
	  				<h1 className={styles.lobsterFont}>SPONSORS</h1>
	  			</div>
  			</center>
  		</div>
  		)
  }
}
