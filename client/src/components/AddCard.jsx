import React, { useState } from 'react'
import Navbar from "./navbar/Navbar.jsx"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddCard = ({data}) => {

  const [card, setCard] = useState({
    cardnumber: '',
    cvv: '',
    balance: '',
    expiry: '',
    brand: 'MasterCard'
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCard((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(card);
  };


  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/cards/add/${data.idusers}`, card);
      navigate('/profile');
    } catch (err) {
      console.log(err);
      console.log(err.response);
      console.log(err.message);
    }
  };



  return (
    <div className="w3-card-4 alldv">
    
      
  <div className="w3-container w3-white ">
    <h2>You can add your card frome her</h2>
    <form className="w3-container" >
    <div className='dv'>
    <p>      
    <label className="w3-text-blue"><b>Card Number : </b></label>
    <input onChange={handleChange} className="w3-input w3-border w3-white inp" name="cardnumber" type="text"/></p>
    <p>      
    <label className="w3-text-blue"><b>CVV :</b></label>
    <input onChange={handleChange} className="w3-input w3-border w3-white inp" name="cvv" type="text"/></p>
    <p>      
    <label className="w3-text-blue"><b>Balance :</b></label>
    <input onChange={handleChange} className="w3-input w3-border w3-white inp" name="balance" type="text"/></p>
    <p>      
    <label className="w3-text-blue"><b>Expiry :</b></label>
    <input onChange={handleChange} className="w3-input w3-border w3-white inp" name="expiry" type="text"/></p>
    <p>      
    <label className="w3-text-blue"><b>Brand</b></label>
    <input onChange={handleChange} className="w3-input w3-border w3-white inp" placeholder='MasterCard' disabled  name="brand" type="text"/></p>
    </div>
    <p>
    <button onClick={handleClick} className="w3-btn w3-blue btnn">Add Card</button></p>
  </form>
  </div>
  <br/>

 
</div>
  )
}

export default AddCard