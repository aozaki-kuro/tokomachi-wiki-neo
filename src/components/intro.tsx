import React from 'react'
import IntroImg from '/static/img/intro.png'
import '@site/src/css/introanime.css'

function tkmtintro() {
  return (
    <div id="box">
      <p>
        <img className="IntroImg" src={IntroImg} alt="Tokomachi" />
        <br />
        <span className="IntroLeft" style={{ paddingRight: '5rem' }}>
          The Comet in the night sky
        </span>
        <br />
        <span className="IntroRight" style={{ paddingLeft: '5rem' }}>
          and the Stargazing Cerberus.
        </span>
      </p>
    </div>
  )
}

export default tkmtintro
