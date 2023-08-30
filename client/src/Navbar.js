import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { LoginContext } from './contexts/LoginContext'

export const Navbar = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginContext)
  const location = useLocation();
    // List of pages where you want to show the button
    const pagesWithButton = ['/page1', '/page2'];

  const logoutUser = () => {
    // Perform logout logic here
    setLoggedIn(false); // Set loggedIn state to false
  };
  const linkStyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "24px",
    // Add more styles here
  }

  return (
    <div>    
         <nav className="navbar">
        {/* <a id='last-button'>
        <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path fill="currentColor" d="M394-72-15-481l409-409 85 85-324 324 324 324-85 85Z"/></svg>
        </a> */}
        <ul className="right-links">
     {/* Show the Stocks link only when logged in */}
     {loggedIn && <li><Link to="/" style={linkStyle}>Stocks</Link></li>}
        {/* Show the Login link only when not logged in */}
        {!loggedIn && <li><Link to="/login" style={linkStyle}>Login</Link></li>}
      <li>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </li>
      {loggedIn && (
          <>
            <li><Link to="/" onClick={logoutUser} style={linkStyle}>Logout</Link></li>
          </>
        )}
    </ul>
  </nav>
    </div>

  )
}