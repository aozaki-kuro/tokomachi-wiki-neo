import React from 'react'
import IntroSuisei from '/static/img/intro/suisei_zhtw.webp'
import IntroToko from '/static/img/intro/toko_zhtw.webp'
import '@site/src/css/introanime_zhtw.css'

function tkmtintro() {
  return (
    <div id="box">
      <p>
        <img className="IntroToko" src={IntroToko} alt="Toko" />
        <img className="IntroSuisei" src={IntroSuisei} alt="Suisei" />
        <br />
        <span className="IntroLeft" style={{ paddingRight: '5rem' }}>
          在夜空中的彗星
        </span>
        <br />
        <span className="IntroRight" style={{ paddingLeft: '5rem' }}>
          和在觀星的三頭犬
        </span>
      </p>
    </div>
  )
}

export default tkmtintro
