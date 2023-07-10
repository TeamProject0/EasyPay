import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const generator = require('creditcard-generator')

const AddCard = ({ data, refresh, setRefresh }) => {
  //! cvv generator
  const rcvv = () => {
    let str = ""
    for (var i = 0; i < 3; i++) {
      str = str + Math.floor(Math.random() * 9)
    }
    return str
  }
  //! generated cvv 
  const cvv = rcvv()
  //! generated credit card number
  const creditCardNumber = generator.GenCC("Mastercard", 1)
  //! expiring date
  const expiring = `${new Date().getMonth() + "/" + (new Date().getFullYear() + 5)
    }`
  //! cards info
  const [card, setCard] = useState({
    cardnumber: Number(creditCardNumber[0]),
    cvv: Number(cvv),
    balance: '',
    expiry: expiring,
    brand: 'MasterCard'
  });
  const navigate = useNavigate();
  //! handle targeted values
  const handleChange = (e) => {
    setCard((prev) => ({ ...prev, [e.target.name]: Number(e.target.value) }));

  };
  console.log(card);
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/cards/add/${data[0].idusers}`, card);
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
        <h2>Add a new or existing card</h2>
        <form className="w3-container" >
          <div className='dv'>
            <p>
              <label className="w3-text-blue"><b>Card Number : </b></label>
              <input onChange={handleChange} className="w3-input w3-border w3-white inp" name="cardnumber" placeholder={creditCardNumber} disabled type="text" /></p>
            <p>
              <label className="w3-text-blue"><b>CVV :</b></label>
              <input onChange={handleChange} className="w3-input w3-border w3-white inp" placeholder={cvv} name="cvv" type="text" /></p>
            <p>
              <label className="w3-text-blue"><b>Balance :</b></label>
              <input onChange={handleChange} className="w3-input w3-border w3-white inp" name="balance" type="text" /></p>
            <p>
              <label className="w3-text-blue"><b>Expiry :</b></label>
              <input onChange={handleChange} className="w3-input w3-border w3-white inp" name="expiry" placeholder={expiring} type="text" /></p>
            <p>
              <label className="w3-text-blue"><b>Brand</b></label>
              <input onChange={handleChange} className="w3-input w3-border w3-white inp" placeholder='MasterCard' disabled name="brand" type="text" /></p>
          </div>
          <p>
            <button onClick={handleClick} className="w3-btn w3-blue btnn">Add Card</button></p>
        </form>
      </div>
      <br />


    </div>
  )
}

export default AddCard