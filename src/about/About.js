import React from 'react'
import { Link } from 'react-router-dom'
import styles from './About.module.css'

export default class About extends React.Component {
  render() {
    return (
      <div>
        <ul class="nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
        <h2>Executive Board</h2>
        <ul class="mdc-image-list my-image-list">
          <li class="mdc-image-list__item">
            <div class="mdc-image-list__image-aspect-container">
              <img class="mdc-image-list__image" src="../assets/Joseph_Theoharakis.jpg">
            </div>
            <div class="mdc-image-list__supporting">
              <span class="mdc-image-list__label">
                <h3>Joseph Theoharakis</h3>
                <h4>President</h4>
              </span>
            </div>
          </li>
          <li class="mdc-image-list__item">
            <div class="mdc-image-list__image-aspect-container">
              <img class="mdc-image-list__image" src="../assets/Celine_Khoo.jpg">
            </div>
            <div class="mdc-image-list__supporting">
              <span class="mdc-image-list__label">
                <h3>Celine Khoo</h3>
                <h4>Vice President</h4>
              </span>
            </div>
          </li>
          <li class="mdc-image-list__item">
            <div class="mdc-image-list__image-aspect-container">
              <img class="mdc-image-list__image" src="../assets/Denise_Weinberger.jpg">
            </div>
            <div class="mdc-image-list__supporting">
              <span class="mdc-image-list__label">
                <h3>Denise Weinberger</h3>
                <h4>Treasurer</h4>
              </span>
            </div>
          </li>
          <li class="mdc-image-list__item">
            <div class="mdc-image-list__image-aspect-container">
              <img class="mdc-image-list__image" src="../assets/Matt_Rantz.jpg">
            </div>
            <div class="mdc-image-list__supporting">
              <span class="mdc-image-list__label">
                <h3>Matt Rantz</h3>
                <h4>Event Coordinator</h4>
              </span>
            </div>
          </li>
        </ul>
        <h3>Everyone else ... coming soon</h3>
      </div>
    )
  }
}
