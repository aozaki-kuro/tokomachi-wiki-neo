import React from 'react'
import Link from '@docusaurus/Link'

import Translate from '@docusaurus/Translate'

function YTLink(props) {
  const Url = `https://youtu.be/${props.Id}`
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
