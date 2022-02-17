import React from 'react'

const Fa = function (props) {
    return <i className={props.name.map((x) => `fa-${x}`).join(' ')}></i>
}

export default Fa