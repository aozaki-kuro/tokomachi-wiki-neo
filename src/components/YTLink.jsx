// This is needed for any .jsx file
// JSX allows you to use HTML tags in JavaScript
import React from 'react'
import Link from '@docusaurus/Link'

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
  let Des = props.Des
  if (Des == undefined || Des == '') {
    Des = null
  } else {
    Des = '\xa0' + props.Des
  }
  const url = `https://youtube.com/watch?v=${Id}&t=${Time}s`
  const text = formattedTime(Time)
  // Unlike Vue, in React you do NOT use :key=val but key={val}
  return (
    <Link to={url}>
      <i className="fa-solid fa-stopwatch" /> <code>{text}</code>
      {Des}
    </Link>
  )
}

// Don't forget to export the function you need :D
export default YTLink
