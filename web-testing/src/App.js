import React, { useState } from 'react'

import Display from './components/Display'
import Dashboard from './components/Dashboard'

function App() {
  const [ball, setBall] = useState(0)
  const [strike, setStrike] = useState(0)

  return (
    <div>
      <Display />
      <Dashboard />
    </div>
  )
}

export default App
