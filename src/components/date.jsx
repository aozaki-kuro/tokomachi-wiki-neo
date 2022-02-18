import React from 'react'

function Date(props) {
  const Date = props.D
  return (
    <p style={{ fontSize : "1.5rem" , fontWeight : "bold" }} >
      {Date}
    </p>
  )
}

export default Date