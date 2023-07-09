import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Navbar = ({ data }) => {
  const navigate = useNavigate();
  const logout = (res) => {
    const token = res.data; console.log("log out succesfully")

    localStorage.removeItem('token',token);
    navigate('/login');
  };

  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ">
    <li className="nav-item dropdown ">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       <img
src={data[0].cover}
className="rounded-circle "
height="50"
alt="Black and White Portrait of a Man"
loading="lazy"
/>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link to="/profile"><p className="dropdown-item" >Profile</p></Link>  
         
          <p className="dropdown-item" onClick={logout} >Log out</p>

        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
    <button className=" btn btn-dark my-2 my-sm-0" type="submit">Activity</button>
      <button className="btn btn-dark my-2 my-sm-0" type="submit">Transaction</button>
    </form>
  </div>
</nav>
)
}

export default Navbar



