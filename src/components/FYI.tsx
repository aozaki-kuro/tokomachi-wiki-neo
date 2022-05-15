import React from 'react'
import Link from '@docusaurus/Link'

import Translate from '@docusaurus/Translate'

function FYI(props) {
  const Topic = props.Topic
  const Desc = props.Desc
  return (
    <p>
      <Translate id="FYI.tag" description="Message for YT FYI">
        For more information, please read
      </Translate>{' '}
      <Link to={Desc}>
        <i className="fa-solid fa-microphone-lines"></i>
        <Translate id="FYI.topic" description="Topics">
          Topics:
        </Translate>{' '}
        {Topic}
      </Link>
      <Translate id="FYI.mark" description="End Mark">
        .
      </Translate>
    </p>
  )
}

export default FYI
