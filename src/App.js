import React from 'react'
import './App.css'

import * as Tone from 'tone'

function App() {
  //create a synth and connect it to the master output (your speakers)
  const synth = new Tone.Synth().toMaster()

  const handleClick = (evt) => {
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease('C4', '8n')
  }

  return (
    <div className="App">
      <button onClick={handleClick}>hear things!</button>
    </div>
  )
}

export default App