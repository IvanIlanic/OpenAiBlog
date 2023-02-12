import React from 'react'
import './App.css'
import {Header,Section1,Footer,BackTotTopButton} from './Content'

const App = () => {
  return (
    <div className='App' >
      <div className='gradient-background scale-up-center '>
      <Header/>
      <Section1/>
      <Footer/>
      </div>
      <div>
      <BackTotTopButton/>
      </div>
     
    </div>
  )
}

export default App