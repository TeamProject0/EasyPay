import React  , {useEffect} from 'react';
import axios from 'axios';
import '../../App.css'
const Allhistory = () => {
 const [data , setData] = useEffect
useEffect(() => {
    fetch()
} , [])


   const  fetch = () => {
axios.get("http://localhost:3000/history")
.then(res => {
    console.log(res.data)
    setData(res.data)


})
.catch(err => {console.log(err)})
    } 

    return (
        <div>
           {data.map((el , i) =>  {
return <div class="card">
  <div class="card-details">
    <p class="text-title">{el.type}</p>
    <p class="text-body">{el.date}</p>
  </div>
  <button class="card-button">More info</button>
</div>
           })}
        </div>
    );
}

export default Allhistory;
