// import { useState } from 'react'
import './App.css'
import AudioPlayer from './components/AudioPlayer'
// import Controls from './components/Controls'
import DailyQuote from './components/DailyQuote'
import Title from './components/Title'

function App() {

  return (
    <>
      <Title />
      {/* <Controls /> */}
      <DailyQuote />
      <AudioPlayer />
    </>
  )
}

export default App
