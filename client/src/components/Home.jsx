
import React from 'react'
import Navbar from './navbar/Navbar.jsx'
import Card from './Card.jsx'
import CreditCard from './CreditCard.jsx'
import { useLocation } from 'react-router-dom'
import AddCard from './AddCard.jsx'
import Allhistory from './history/AllHistory.jsx'
import LastFiveHistory from './history/LastFiveHistory.jsx'


const Home = () => {
  const location = useLocation()
  const data = location.state

  console.log("data in home", data);
  return (
    <div>
      <Navbar data={data} />
      <div className='al'>
        <Card />
        <CreditCard iduser={data[0].idusers} data={data} />
        <AddCard />
      </div>
    </div>
  )
}

export default Home

