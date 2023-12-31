import React from 'react';
import './App.css';
import {Routes,Route } from "react-router-dom"

import Signup from "./components/signup/Signup.jsx"
import Login from "./components/login/Login.jsx"
import Home from './components/Home';

import AllHistory from './components/history/AllHistory'
import AddCard from './components/AddCard.jsx';
import LastFiveHistory from './components/history/LastFiveHistory';




function App() {
  return (


    <> 
    <Routes>
    <Route path='/fivehistory'  element={<LastFiveHistory/>}/>
    <Route path='/history'  element={<AllHistory />}/>
     <Route path='/' element={<Signup/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/profile' element={<Home/>}/>
     <Route path='/add' element={<AddCard/>}/>
    </Routes>
    </>

  

  );
}

export default App;
