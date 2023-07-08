import React  , {useEffect} from 'react';
import axios from 'axios';


const Allhistory = () => {

useEffect(() => {
    fetch()
} , [])


   const  fetch = () => {
axios.get("http://localhost:3000/history")
.then(res => {console.log(res.data)})
.catch(err => {console.log(err)})
    } 

    return (
        <div>
            hello
        </div>
    );
}

export default Allhistory;
