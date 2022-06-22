
import CountFunctional from './components/CountFunctional'
import './App.css'
import React, { useState, useEffect } from 'react'
import CountClass from './components/CountClass';
import Search from './components/Search/Search';

const App = () => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false)
  const [challenge, setChallenge] = useState(true)

  const handleComponents = () => {
    setVisible(!visible)
    setChallenge(challenge)
  }
  const handleChallenge = () => {
    setChallenge(!challenge)
    setVisible(visible)
  }

  const add = () => {
    setCount(prev => prev + 1)
  }

  useEffect(() => {
    console.log('App did mount')
  }, [])

  return (
    <div className="App">
      <div>Choose</div>
      <button onClick={handleComponents}>Components</button>
      <button onClick={handleChallenge}>Challenge</button>
      <hr />
      {challenge && <Search />}
      {visible && (
        <>
          <CountClass
            count={count}
            add={() => add()} />
          <CountFunctional name='Rama'
            count={count}
            add={() => add()}
            substract={() => setCount(prev => prev - 1)}
          />

        </>
      )
      }
    </div>
  )
}

export default App
