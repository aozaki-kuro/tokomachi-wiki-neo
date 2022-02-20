import React from 'react'
import ReactPlayer from 'react-player/lazy'
import '@site/src/css/video.css'

function YTEmbed(props) {
  const Id = props.Id
  const Url = `https://www.youtube-nocookie.com/watch?v=${Id}`
  return (
    <div className="video-responsive">
      <ReactPlayer url={Url} controls="true" volume="0.5" />
    </div>
  )
}

export default YTEmbed
