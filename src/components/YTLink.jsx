// This is needed for any .jsx file
// JSX allows you to use HTML tags in JavaScript
import React from 'react'

// Give a **number**, return mm:ss
function formattedTime(sec) {
  // minute
  const h = Math.floor(sec / 60)
  // second
  const s = sec - h * 60
  // pad second to 2 digits
  const ss = String(s).padStart(2, '0')
  return h + ':' + ss
}

// A normal way to do it.
function YTLink(props) {
  // Pick the items
  const Id = props.Id
  const Time = Number(props.Time)
  const Des = props.Des
  if (Des == undefined || Des == '') {
    var Des1 = null
  } else {
    var Des1 = '\xa0' + props.Des
  }
  const url = `https://youtube.com/watch?v=${Id}&t=${Time}s`
  const text = formattedTime(Time)
  // Unlike Vue, in React you do NOT use :key=val but key={val}
  return (
    <a href={url} target="_blank" rel="noopener noreferer">
      <i className="fa-solid fa-stopwatch" /> <code>{text}</code>
      {Des1}
    </a>
  )
}

// Don't forget to export the function you need :D
export default YTLink
