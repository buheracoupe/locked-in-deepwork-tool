import React from 'react'
import { ReactTyped } from 'react-typed'

function TypedDisplay({className}) {
  return (
    <ReactTyped className= {className}
      typeSpeed={60}
      backSpeed={70}
    strings={["Increased Focus", "Improved Learning", "Enhanced Creativity", "Reduced Procastination", "Get To Work!"]} >

    </ReactTyped>
  )
}

export default TypedDisplay