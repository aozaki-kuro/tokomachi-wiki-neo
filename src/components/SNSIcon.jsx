import React from 'react'

const SNSIcon = function (prop) {
  let Name = prop.Name || ''
  if (Name == 'twitter') {
    return <i className="fa-brands fa-twitter"></i>
  } else {
    return <i className="fa-brands fa-youtube"></i>
  }
}

export default SNSIcon
