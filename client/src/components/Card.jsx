import React from 'react';

const Card = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">PayPal</h5>
        <h6 className="card-subtitle mb-2 text-muted">Balance</h6>
        <p className="card-text">Amount: 1000 $ </p>
        <a href="#" className="btn btn-primary">Link</a>
        <a href="#" className="btn btn-secondary">Another Link</a>
      </div>
    </div>
  );
};

export default Card;
