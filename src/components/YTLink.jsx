import React from 'react'
import Link from '@docusaurus/Link'

function YTLink(props) {
  const Id = props.Id
  return (
    <Link to="https://youtu.be/${Id}">
      <i class="fa-brands fa-youtube"></i> Original YouTube Stream
    </Link>
  )
}

export default YTLink