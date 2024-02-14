import React from "react";
import "./style/Uistyle.css"
import explore from "./assets/Layer_2.svg"
import hobbie from "./assets/Hobbies.svg"
import book from "./assets/bookmark_black_24dp 1.svg"
import notification from "./assets/notifications_black_24dp 1.svg"
import product from "./assets/Product 3.svg"
const Navbar = () => {
  return (
    <>
     <div className="container">
     <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            
            <img className="img-w"  src={require("./assets/HobbyCue Logo.png")} alt="logo" />{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search here "
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search{" "}
              </button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav_ul gap_nav ">
              
             
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 <img src={explore} alt="" /> Explore
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                 <img src={hobbie} alt="" /> Hobbies
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-link " >
                <img src={book} alt="" />
               
              </li>
              <li className="nav-link ">
               
                <img src={notification} alt="" />
              
              </li>
              <li className="nav-link " >
              
                <img src={product} alt="" />
              </li>
              <li className="nav-link sign-btn" >
              <button className="btn btn-outline-primary" type="submit">
               Sign In
              </button>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
     </div>
    </>
  );
};

export default Navbar;
