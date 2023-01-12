import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a className="navbar-brand" href="#">Ingeal</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <Link to={"/"} className="nav-link">
        <span > Home</span>
                  </Link>
        </li>
        <li className="nav-item ">
        <Link to={"/character"} className="nav-link">
        <span className=""> Character</span>
                  </Link>
     
        </li>
        
      </ul>
    </div>
  </nav>
    </>
  )
}
