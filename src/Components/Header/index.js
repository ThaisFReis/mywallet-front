import { Link } from 'react-router-dom';

// CSS
import "../../Assets/Styles/Header.css";

// Import
import Footer from '../Footer';

// Import Images and Icons
import Logo from "../../Assets/Images/Logo.png";

function Header () {
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
                <p>Usuário</p>
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