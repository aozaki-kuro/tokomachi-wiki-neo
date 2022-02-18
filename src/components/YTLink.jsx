import React from 'react'
import Link from '@docusaurus/Link'

function YTLink(props) {
  const Id = props.Id
  const Redir = `https://youtu.be/${Id}`
  return (
    <Link to={Redir}>
      <i class="fa-brands fa-youtube"></i> Original YouTube Stream
    </Link>
  )
}

export default YTLink
