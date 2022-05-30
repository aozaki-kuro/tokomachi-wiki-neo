import React from 'react'

const SNSIcon = function (prop) {
  return prop.Name === `twitter` ? (
    <i className="fa-brands fa-twitter"></i>
  ) : (
    <i className="fa-brands fa-youtube"></i>
  )
}

export default SNSIcon
