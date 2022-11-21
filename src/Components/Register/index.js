import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// CSS
import "../../Assets/Styles/Register.css";

// Import
import Footer from '../Footer';

// userContext and api are imported from other files
import { userContext } from "../Contexts/userContext"

function Register () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();

    const body = {
      name,
      email,
      password,
      passwordConfirmation
    }

    try {
      const response = await axios.post("/register", body);
      console.log(response);

      navigate("/login");
    } catch (error) {
      alert("Erro ao cadastrar");
      console.log(error);
    }
  }

  return (
      <>
        <div className="registerPage">
          <div className="header">
            <h1>CADASTRO</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input type="name" name="name" id="name" value={name} onChange={ e => setName(e.target.value)} required />
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
            <label htmlFor="confirmPassword">Confirme sua senha:</label>
            <input type="password" name="confirmPassword" id="confirmPassword" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} required />
            <button type="submit" onClick={handleSubmit}>CADASTRAR</button>
          </form>
          <div className="login">
            <Link to="/login">
                <button> JÁ TEM UMA CONTA? FAÇA LOGIN </button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
  )
}

export default Register;