// Provide a button that will change if there is a
// strike, ball, foul or hit
// no need to specify the type of hit
// changes here should update the display component
import React from 'react'

const Dashboard = ({ handleScoreboard }) => {
  return (
    <div>
      <button onClick={() => handleScoreboard('strike')}>Strike</button>
      <button onClick={() => handleScoreboard('ball')}>Ball</button>
      <button onClick={() => handleScoreboard('foul')}>Foul</button>
      <button onClick={() => handleScoreboard('hit')}>Hit</button>
    </div>
  )
}

export default Dashboard
