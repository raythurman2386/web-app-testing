import React from 'react'

import { useLocalStorage } from './hooks/useLocalStorage'
import Display from './components/Display'
import Dashboard from './components/Dashboard'

function App() {
  const [ball, setBall] = useLocalStorage('ball', 0)
  const [strike, setStrike] = useLocalStorage('strike', 0)

  const handleScoreboard = action => {
    // Refactor this dumpster file
    switch (action) {
      case 'strike':
        const newStrike = strike + 1
        if (newStrike === 3) {
          setBall(0)
          setStrike(0)
        } else {
          setStrike(newStrike)
        }
        break
      case 'ball':
        const newBall = ball + 1
        if (newBall === 4) {
          setBall(0)
          setStrike(0)
        } else {
          setBall(newBall)
        }
        break
      case 'foul':
        const newFoul = strike + 1
        if (newFoul > 2) {
          break
        } else {
          setStrike(newFoul)
        }
        break
      case 'hit':
        setBall(0)
        setStrike(0)
        break

      default:
        console.log('something went wrong')
        break
    }
  }

  return (
    <div>
      <Display ball={ball} strike={strike} />
      <Dashboard handleScoreboard={handleScoreboard} />
    </div>
  )
}

export default App
