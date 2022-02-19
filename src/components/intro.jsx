import React from 'react'
import IntroImg from '@site/docs/intro.png'

function tkmtintro() {
  return (
    <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
      <img src={IntroImg} style={{ width: '10rem', height: '10rem' }} />
      <br />
      <span style={{ paddingRight: '5rem' }}>The comet in the night sky</span>
      <br />
      <span style={{ paddingLeft: '10rem' }}>and the Stargazing Cerberus.</span>
    </p>
  )
}

export default tkmtintro
