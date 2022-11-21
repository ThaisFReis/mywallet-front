import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// CSS
import "../../Assets/Styles/Register.css";

// Import
import Footer from '../Footer';

function SingUp () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();

    const body = {
      email,
      name,
      password,
      passwordConfirmation
    }

    try {
      await axios.post("http://localhost:5000/singup", body);
      console.log("Cadastro realizado com sucesso!");

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
            <label htmlFor="passwordConfirmation">Confirme sua senha:</label>
            <input type="password" name="passwordConfirmation" id="passwordConfirmation" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} required />
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

export default SingUp;