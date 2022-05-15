import React from 'react'
import Link from '@docusaurus/Link'

import Translate from '@docusaurus/Translate'

function YTLink(props) {
  const Id = props.Id
  const Url = `https://youtu.be/${Id}`
  return (
    <Link to={Url}>
      <i className="fa-brands fa-youtube"></i>{' '}
      <Translate id="YTLink.text" description="YouTube link text">
        Original YouTube Stream
      </Translate>
    </Link>
  )
}

export default YTLink
