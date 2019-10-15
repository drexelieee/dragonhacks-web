import React from 'react'
import { Link } from 'react-router-dom'
import styles from './About.module.css'

export default class About extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
        </ul>
        <h2>Executive Board</h2>
        <ul>
          <li>
            <div>
              <img src='../assets/Joseph_Theoharakis.jpg' />
            </div>
            <div>
              <h3>Joseph Theoharakis</h3>
              <h4>President</h4>
            </div>
          </li>
          <li>
            <div>
              <img src='../assets/Celine_Khoo.jpg' />
            </div>
            <div>
              <h3>Celine Khoo</h3>
              <h4>Vice President</h4>
            </div>
          </li>
          <li>
            <div>
              <img src='../assets/Denise_Weinberger.jpg' />
            </div>
            <div>
              <h3>Denise Weinberger</h3>
              <h4>Treasurer</h4>
            </div>
          </li>
          <li>
            <div>
              <img src='../assets/Matt_Rantz.jpg' />
            </div>
            <div>
              <h3>Matt Rantz</h3>
              <h4>Event Coordinator</h4>
            </div>
          </li>
        </ul>
        <h3>Everyone else ... coming soon</h3>
      </div>
    )
  }
}
