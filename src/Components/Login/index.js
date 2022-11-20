import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

// CSS
import "../../Assets/Styles/Login.css";

// Import
import Footer from '../Footer';

function Login () {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    login(email, password);
  };

  return (
      <body>
        <div className="loginPage">
          <div className="header">
            <h1>LOGIN</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label for="email">E-mail:</label>
            <input type="email" id="email" name="email" value={email} placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} />
            <label for="password">Senha:</label>
            <input type="password" id="password" name="password" value={password} placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} />
            <Link to="/UserPage">
              <button type="submit">ENTRAR</button>
            </Link>
          </form>
          <div className="register">
            <Link to="/Cadastro">
                <button> NÃO TEM UMA CONTA? CADASTRE-SE </button>
            </Link>
          </div>
        </div>
        <Footer />
      </body>
  )
}

export default Login;