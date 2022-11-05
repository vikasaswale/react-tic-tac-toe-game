import React from 'react'

const Box = (props) => {
  return (
    <div className='box' onClick={props.onClick}>
        <h1>{props && props.val}</h1>
    </div>
  )
}

export default Box