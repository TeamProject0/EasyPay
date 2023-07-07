import React from 'react'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
 

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto ">
    <li className="nav-item dropdown ">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       <img
src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
className="rounded-circle "
height="50"
alt="Black and White Portrait of a Man"
loading="lazy"
/>
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Profile</a>
          <a className="dropdown-item" href="#">Activity</a>
          <a className="dropdown-item" href="#">Transaction</a>
          <a className="dropdown-item" href="#">Log out</a>

        </div>
      </li>
      
     
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
)
}

export default Navbar




// <img
// src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
// className="rounded-circle "
// height="70"
// alt="Black and White Portrait of a Man"
// loading="lazy"
// />