import React from 'react'
import Header from './Head-Components/Header'
import Home from './Home-Components/Home';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import BackToTopButton from './BackToTopButton';
function All() {
  return (
    <>
      <Header/>
      <Home/>
      <BackToTopButton/>
      
    </>
  )
}

export default All
