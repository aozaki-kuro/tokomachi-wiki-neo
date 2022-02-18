import React from 'react'
import Link from '@docusaurus/Link'

function FYI(props) {
  const Topic = props.Topic
  const Des = props.Des
  return (
    <p>
      <em>
        For more information, please read{' '}
        <Link to={Des}>
          <i class="fa-solid fa-microphone-lines"></i> Topics: {Topic}
        </Link>
        .
      </em>
    </p>
  )
}

export default FYI
