import { Link } from 'react-router-dom';

// CSS
import "../../Assets/Styles/Home.css";

// Import
import Footer from '../Footer';

// Import Images and Icons
import Logo from "../../Assets/Images/Logo.png";

function Home () {
    return (
        <body>
            <div className="homePage">
                <div className="logo">
                    <h1>MY WALLET</h1>
                    <h1>MY WALLET</h1>
                    <h1>MY WALLET</h1>
                    <h1>MY WALLET</h1>
                    <h1>MY WALLET</h1>
                    <h1>MY WALLET</h1>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="buttons">
                    <Link to="/Login">
                        <button>LOGIN</button>
                    </Link>
                    <Link to="/Cadastro">
                        <button>CADASTRO</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </body>
    )
}

export default Home;