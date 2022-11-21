import { Link } from 'react-router-dom';
import React, { useContext } from 'react';


// CSS
import "../../Assets/Styles/Header.css";

//Import userContext from other file
import userContext from "../Contexts/userContext"

function Header () {
    const { user } = useContext(userContext);

  return (
      <header>
        <Link to="/userPage">
            <div className="logo">
                <p>My Wallet</p>
            </div>
        </Link>
        <div className="user">
            <div className="user_info">
                <ion-icon name="person-circle-outline"></ion-icon>
                <p>Olá,</p>
                <p>{user.name}</p>
            </div>
            <div className="user_logout">
                <Link to="/">
                    <button><ion-icon name="log-out-outline"></ion-icon></button>
                </Link>
            </div>
        </div>
      </header>
  )
}

export default Header;