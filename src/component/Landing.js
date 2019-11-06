import React from 'react'
import { Typography, Container, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import LoginForm from '../forms/LoginForm'

// The following times are in UTC
const START_DATE = new Date(Date.UTC(2020, 1, 22, 19))
const END_DATE = new Date(Date.UTC(2020, 1, 23, 19))

const useStyles = makeStyles({
  root: {},
  login: {
    textAlign: 'center'
  }
})

export default function Landing() {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Container maxWidth='md' className={classes.login}>
        <Typography style={{ margin: '1em 0' }} variant='h1'>
          Login with Love
        </Typography>
        <Typography style={{ margin: '1em 0' }} variant='h2'>
          Welcome to Dragon<wbr />Hacks {START_DATE.getFullYear()}!
        </Typography>
        <LoginForm />
      </Container>
      <Container>
        <Typography variant='h2'>About</Typography>
        <Typography>
          DragonHacks is Drexel University's 24 hour hardware-focused hackathon
          event hosted by Drexel University IEEE in {START_DATE.getFullYear()} in the Bossone Research
          Enterprise Center. DragonHacks {START_DATE.getFullYear()} is bringing the brightest minds of
          the world's best schools to spend 24 hours to hours to create ground
          breaking new products from scratch!
        </Typography>
        <Typography>
          We will have more than enough East coast exclusive food and caffeine
          to energize hungry and excited hackers. Your sleepless efforts will be
          rewarded with swag and other goodies!
        </Typography>
        <Typography>
          {START_DATE.toLocaleTimeString()} Hacking begins at 2 PM on Saturday, April 20th right after the opening
          ceremony and ends at 2 PM on Sunday, April 21st. You must submit your
          project on Devpost. In order to be eligible for prizes, you also must
          demonstrate your project.
        </Typography>
      </Container>
      <Container>
        <Typography variant='h2'>FAQ</Typography>
        <div>
          <Typography variant='h3'>Is there a code of conduct?</Typography>
          <Typography>Yes. Abide by the <Link href='https://static.mlh.io/docs/mlh-code-of-conduct.pdf'>MLH Code of Conduct</Link>.</Typography>
        </div>
        <div>
          <Typography variant='h3'>What should I bring to the hackathon?</Typography>
          <Typography>
            A valid student ID, laptop, charger, and whatever makes you
            comfortable or supports your coding activities (keyboard, mouse,
            etc.).
          </Typography>
        </div>
        <div>
          <Typography variant='h3'>Do you provide any hardware?</Typography>
          <Typography>
            Yes! Here is the list of hardware MLH will be providing during
            DragonHacks {START_DATE.getFullYear()}: MLH Hardware. We will also be providing our own
            hardware which can be found on the DragonHacks Hardware List.
          </Typography>
        </div>
        <div>
          <Typography variant='h3'>Are there prizes?</Typography>
          <Typography>
            There are plenty of prizes to be won at DragonHacks {START_DATE.getFullYear()}! You will
            have the opportunity to compete in plenty of challenges for a chance
            to win: Xbox Ones, PS4s, GoPros, Apple Watches, Samsung LED TVs,
            Nintendo Switches, iPad Airs, and way more! First place gets first
            choice of prizes with each member in the winning team choosing one
            prize from the list, down to the last DragonHacks challenge winners.
            All projects must be submitted on Devpost in order to be eligible
            for judging.
          </Typography>
        </div>
        <div>
          <Typography variant='h3'>How do we submit our projects?</Typography>
          <Typography>
            All submissions will be due on Sunday at 2 PM on the DragonHacks
            {START_DATE.getFullYear()} Devpost site. We highly recommend you submit at 1:30 PM to give
            yourself some wiggle room for any last-minute technical issues. All
            projects must be submitted on Devpost in order to be eligible for
            judging and prizes!
          </Typography>
        </div>
        <div>
          <Typography variant='h3'>I don't have a team or idea :( What should I do?</Typography>
          <Typography>
            If you do not currently have a team or idea, do not fear! Many
            hackers come in without teams or ideas. There are two methods to
            find teammates, and trust us, hacking with a team is a lot more fun!
            Team sizes have to be 2–5 people. You should be invited to the
            official DragonHacks {START_DATE.getFullYear()} Slack Group where we have a #teamformation
            channel dedicated to team formations. We will also be holding a team
            formation event before the kickoff and opening ceremony. Also check
            out the DragonHacks {START_DATE.getFullYear()} Devpost challenges for inspiration on what
            problems to tackle.
          </Typography>
        </div>
        <div>
          <Typography variant='h3'>What challenges are there?</Typography>
          <Typography>
            On top of the usual first, second, and third places, we also have
            challenges like best healthcare hack, funniest hack, hack with the
            best design or name — not everything is fully technical! We also
            have sponsor challenges from JetBrains, .tech, Wolfram, Lockheed
            Martin, Close School of Entrepreneurship, GLOBO, and more! The full
            list of challenges are listed in the Official DragonHacks {START_DATE.getFullYear()}
            Devpost.
          </Typography>
        </div>
        <div>
          <Typography variant='h3'>Who can join?</Typography>
          <Typography>
            DragonHacks is open to all university students (undergrad/grad).
            High school students are welcome as well so long as they are 18
            years of age or older. No prior hackathon or hardware experience is
            necessary.
          </Typography>
        </div>
        <div>
          <Typography variant='h3'>How is the application process?</Typography>
          <Typography>
            Just register on the site! If space becomes limited, we will review
            applications. Registration is individual and teams can be formed the
            day of the event.
          </Typography>
        </div>
        <div>
          <Typography variant='h3'>How much will this cost me?</Typography>
          <Typography>
            Attendance is free. Dinner, lunch, breakfast, drinks, and snacks are
            on us! As well as T-shirts and other swag. We will be having free
            demos from companies. The only thing that you are responsible for is
            transportation.
          </Typography>
        </div>
        <div>
          <Typography variant='h3'>When and where is it?</Typography>
          <Typography>TBD</Typography>
        </div>
      </Container>
      <Container>
        <Typography variant='h2'>Sponsors</Typography>
      </Container>
    </main>
  )
}
