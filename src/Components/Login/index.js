import axios from 'axios';
import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// CSS
import "../../Assets/Styles/Login.css";

// Import
import Footer from '../Footer';

// userContext and api are imported from other files
import { userContext } from "../Contexts/userContext"
import api from '../Services/api';

function Login () {
  const { setUser, setToken } = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 

  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();

    try {
      const response = await api.login({ email, password });

      setUser(response.data);
      setToken(response.data.token);
      navigate("/userPage");
    } catch (error) {
      console.log(error);
    }
  }


  return (
      <>
        <div className="loginPage">
          <div className="header">
            <h1>LOGIN</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" value={email} placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} required />
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" value={password} placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">ENTRAR</button>
          </form>
          <div className="register">
            <Link to="/register">
                <button> NÃO TEM UMA CONTA? CADASTRE-SE </button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
  )
}

export default Login;