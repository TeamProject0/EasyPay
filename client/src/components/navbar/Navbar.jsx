import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({ data }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src={data[0]?.cover}
                className="rounded-circle"
                height="50"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">

              <Link to="/profile"><p className="dropdown-item" >Profile</p></Link>

              <Link to="/login">
                <p className="dropdown-item" >Log out</p>
              </Link>


            </div>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <ul className="unlist">
            <li className="listed"> <Link to="/history">Activity</Link></li>
          </ul>
        </form>
      </div>
    </nav>
  )
}

export default Navbar
