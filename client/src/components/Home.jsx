
import React, { useEffect, useState } from 'react'
import Navbar from './navbar/Navbar.jsx'
import Card from './Card.jsx'
import CreditCard from './CreditCard.jsx'
import { useLocation } from 'react-router-dom'
import AddCard from './AddCard.jsx'
import LastFiveHistory from './history/LastFiveHistory.jsx'
import axios from 'axios';


const Home = () => {

  const location = useLocation()
  const data =  location.state
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    const fetchCard = () => {
      axios.get(`http://localhost:3000/cards/getCards/${data[0].idusers}`)
        .then((res) => setCards(res.data))
        .catch((err) => { console.log(err) })
    };
    fetchCard();
  }, [data]);
  console.log("data inside home",data);
  console.log("cards inside home",cards);
  const balance = cards?.map((card) => {
    return card.balance
  })
  if (cards.length !== 0) {
    return (
      <div>
        <Navbar cover={data[0]?.cover} />
        <div className='al'>
          <Card balance={balance} />
          {cards.map((card) => {
            return <CreditCard key={card.idcard} iduser={data[0].idusers} data={data} cards={card} />
          })}

          <AddCard data={data}   />
          <LastFiveHistory />
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <Navbar cover={data[0]?.cover} />
        <div className='al'>
          <Card />
          <AddCard data={data} />
          <LastFiveHistory />
        </div>
      </div>
    )
  }

}

export default Home

