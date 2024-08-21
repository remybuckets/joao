import { useState } from 'react'
import './App.css'
import CardsCollection from './CardsCollection'
import Intro from './intro'
import About from './About'
import Footer from './Footer'
import BlogsCollection from './BlogsCollection'
//breaks at 1024px

function App() {
  return (
    <>
      <div className="bg-gray-900">
        <Intro />
        <About />    
        <BlogsCollection></BlogsCollection>
        <CardsCollection />
        <Footer />
      </div>
    </>
  )
}

export default App
