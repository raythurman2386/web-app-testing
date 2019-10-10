// display will show the count of balls, strikes for the at-bat
// should be updated when the user records activity on
// the dashboard component
import React from 'react'

const Display = ({ ball, strike }) => {
  return (
    <div>
      <h1>At Bat Stats</h1>
      <p>Balls: {ball}</p>
      <p>Strikes: {strike}</p>
    </div>
  )
}

export default Display
