import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Signup from "./components/signup/Signup.jsx"
import Login from "./components/login/Login.jsx"
import Home from './components/Home';
import AllHistory from './components/history/AllHistory'
import AddCard from './components/AddCard.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>


    <Route path='/history'  element={<AllHistory/>}/>
     <Route path='/' element={<Signup/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/profile' element={<Home/>}/>
     <Route path='/add' element={<AddCard/>}/>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
