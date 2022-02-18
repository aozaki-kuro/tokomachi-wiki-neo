import React from 'react'
import PropTypes from 'prop-types'

const YoutubeEmbed = ({ Id }) => (
  <div className="video-responsive">
    <iframe
      width="1920"
      height="1080"
      src={`https://www.youtube-nocookie.com/embed/${Id}?modestbranding=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      autoplay="0"
    />
  </div>
)

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
}

export default YoutubeEmbed
