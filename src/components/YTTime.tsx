// This is needed for any .jsx file
// JSX allows you to use HTML tags in JavaScript
import React from 'react'
import Link from '@docusaurus/Link'

function parse_raw_time_to_seconds(raw) {
  let raw_array = raw.split(':')
  let elements_to_fill = 3 - raw_array.length
  let hhmmss = [...Array(elements_to_fill).fill('0').flat(), ...raw_array]
  let [hh, mm, ss] = hhmmss.map(i => parseInt(i))
  return hh * 3600 + mm * 60 + ss
}

// A normal way to do it.
function YTTime(props) {
  // Pick the items
  const Id = props.Id
  const Time = parse_raw_time_to_seconds(props.Time)
  // See if 'Des' is undefined
  let desc = props.Desc || ''
  if (desc.length > 0) {
    desc = '\xa0' + desc
  }
  // Define output text
  const url = `https://youtu.be/${Id}&t=${Time}s`
  const text = `${props.Time}`
  // Unlike Vue, in React you do NOT use :key=val but key={val}
  return (
    <Link to={url}>
      <i className="fa-solid fa-stopwatch" /> <code>{text}</code>
      {desc}
    </Link>
  )
}

// Don't forget to export the function you need :D
export default YTTime
