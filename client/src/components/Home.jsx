import React from 'react'
import Navbar from './navbar/Navbar.jsx'
import Card from './Card.jsx'
import CreditCard from './CreditCard.jsx'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <CreditCard/>
        <Card/>
    </div>
  )
}

export default Home