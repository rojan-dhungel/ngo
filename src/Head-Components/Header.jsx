import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" id='all_nav'>
        <div className="container">
        <img id="sgs-logo"src="../Images/logono.png"alt="SG Suppliers Logo" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav" id='components'>
              <a className="nav-link active" aria-current="page">Home</a>
              <a className="nav-link">About Us</a>
              <a className="nav-link">Shop now</a>
              <a className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>



    </>
  )
}

export default Header
