import React from 'react'

export default function MLHBadge(props) {
  return (
    <a
      id='mlh-trust-badge'
      style={{
        display: 'block',
        maxWidth: '100px',
        minWidth: '60px',
        position: 'fixed',
        right: '50px',
        top: '0',
        width: '10%',
        zIndex: '10000'
      }}
      href='https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=blue'
      target='_blank'
      rel='noopener noreferrer'
    >
      <img
        src='https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-blue.svg'
        alt='Major League Hacking 2020 Hackathon Season'
        style={{ width: '100%' }}
      />
    </a>
  )
}
