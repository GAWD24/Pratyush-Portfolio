import React from 'react'
import LandingPg from './pages/LandingPg'
import Page2 from './pages/Page2'
import Skills from './pages/Skills'
import "./index.css"
import AboutMe from './pages/AboutMe'

const App = () => {
  return (
    <>
    <div>
      <LandingPg/>
      <Page2 />
      <Skills/>
      <AboutMe/>
    </div>
  </>
  )
}

export default App