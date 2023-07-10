import React, { useEffect, useState } from 'react';

const Card = ({ balance }) => {
  const [amount, setAmount] = useState(0)

  let sum = balance?.reduce(function (a, b) {
    return a + b;
  })

  const activity = (act) => {
    if (act === "withdraw") {
      sum = sum - amount
    } else {
      sum = sum + amount
    }
  }
  return (
    <div className="card2 ">
      <div className="card2-details">
        <p className="text2-title">EasyPay Balance</p>
        <p className="text2-body">$ {sum} USD</p>
        <p className='text2-title'>Available</p>
        <input type="text" className='w3-input w3-border w3-white' style={{ maxWidth: "10rem" }} placeholder='Amount' onChange={(e) => setAmount(e.target.value)} />
        <br />
        <button className="card2-button btn btn-primary" onClick={() => { activity("withdraw") }}>Withdraw</button>
        &nbsp;
        <button className="card2-button btn btn-primary " onClick={() => { activity("deposite") }}>Deposite</button>
      </div>
    </div>
  );
};

export default Card;
