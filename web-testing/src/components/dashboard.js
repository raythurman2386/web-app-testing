// Provide a button that will change if there is a
// strike, ball, foul or hit
// no need to specify the type of hit
// changes here should update the display component
import React from 'react'

const Dashboard = ({ handleScoreboard }) => {
  return (
    <div>
      {/* Maybe change these to inputs with a type of button?
          or maybe type of submit and have a value to send to the handle change
      */}
      <button onClick={() => handleScoreboard('strike')}>Strike</button>
      <button onClick={() => handleScoreboard('ball')}>Ball</button>
      <button onClick={() => handleScoreboard('foul')}>Foul</button>
      <button onClick={() => handleScoreboard('hit')}>Hit</button>
    </div>
  )
}

export default Dashboard
