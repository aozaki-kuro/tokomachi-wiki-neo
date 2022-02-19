import React from 'react'
import Link from '@docusaurus/Link'

function YTLink(props) {
  const Id = props.Id
  const Url = `https://youtu.be/${Id}`
  return (
    <Link to={Url}>
      <i class="fa-brands fa-youtube"></i> Original YouTube Stream
    </Link>
  )
}

export default YTLink
