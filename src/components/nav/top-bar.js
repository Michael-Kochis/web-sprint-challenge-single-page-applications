import React from 'react'
import '../../App.css'
import { HelpButton } from './help-button'
import { HomeButton } from './home-button'

function TopBar() {
  return (
    <div id="top-bar">
      <h1>Lambda Eats</h1>
      <div id="navbar" className="navbar">
          <HomeButton></HomeButton>
          <HelpButton></HelpButton>
      </div>
    </div>
  )
}

export {
    TopBar
}
