import React from 'react'
import IntroSuisei from '/static/img/intro/suisei.webp'
import IntroToko from '/static/img/intro/toko.webp'
import '@site/src/css/introanime.css'

function tkmtintro() {
  return (
    <div id="box">
      <p>
        <img className="IntroSuisei" src={IntroSuisei} alt="Suisei" />
        <img className="IntroToko" src={IntroToko} alt="Toko" />
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
