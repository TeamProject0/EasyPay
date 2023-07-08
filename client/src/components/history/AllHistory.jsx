import axios from 'axios';
import React  , {useEffect} from 'react';


const Allhistory = () => {

useEffect(() => {
    fetch()
} , [])
    fetch = () => {
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
