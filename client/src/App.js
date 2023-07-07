import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Signup from "./components/signup/Signup.jsx"
import Login from "./components/login/Login.jsx"
import Home from './components/Home';
import allHistory from './components/history/AllHistory'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/'  element={<Home/>}/>
    <Route path='/history'  element={<allHistory/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/login' element={<Login/>}/>
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
