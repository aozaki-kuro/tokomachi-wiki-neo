import React from 'react'
import Link from '@docusaurus/Link'

function FYI(props) {
  const Topic = props.Topic
  const Desc = props.Des
  return (
    <p>
      <em>
        For more information, please read{' '}
        <Link to={Desc}>
          <i class="fa-solid fa-microphone-lines"></i> Topics: {Topic}
        </Link>
        .
      </em>
    </p>
  )
}

export default FYI
