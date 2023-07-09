import React  , {useEffect, useState} from 'react';
import axios from 'axios';
import '../../App.css'
const Allhistory = () => {
 const [data , setData] = useState([])
console.log(data)
useEffect(() => {
    
    fetch()
} , [])


   const  fetch = () => {
axios.get("http://localhost:3000/history")
.then((res) => {
    console.log(res.data)
    setData(res.data)


})
.catch(err => {console.log(err)})
    } 

    return (
        <div className="container">
        <h2>Activity</h2>
      
        <table className="table table-condensed">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Receiver</th>
              <th>Type</th>
            </tr>
          </thead>
      
          <tbody>
            {data.map((el, i) => (
              <tr key={i}>
                <td>{el.date}</td>
                <td>{el.amount}</td>
                <td>{el.receive}</td>
                <td>{el.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Allhistory;


