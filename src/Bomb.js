import React from 'react'
class Bomb extends React.Component
{
  constructor(props)
  {
    super()
    const secondsLeft = props.initialCount
    this.state = 
    {
      secondsLeft
    }
  }
  render()
  {
    const time = this.state.secondsLeft
    return <p>{(time === 0) ? `Boom!` : `${this.state.secondsLeft} seconds left before I go boom!`}</p>
  }
}

export default Bomb;