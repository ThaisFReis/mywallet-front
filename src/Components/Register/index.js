import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// CSS
import "../../Assets/Styles/Register.css";

// Import
import Footer from '../Footer';

function Register () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = { name, email, password, confirmPassword };

    try{
      axios.post('http://localhost:3000/register', body)
      .then((response) => {
        console.log(response.data);
        navigate('/login');
      })
    }
    catch (error) {
      console.log(error);
    }
  };

  return (
      <body>
        <div className="registerPage">
          <div className="header">
            <h1>CADASTRO</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label for="name">Nome:</label>
            <input type="name" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label for="email">E-mail:</label>
            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label for="password">Senha:</label>
            <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <label for="password">Confirme a senha:</label>
            <input type="password" placeholder="Confirme a senha" />
            <Link to="/">
              <button type="submit">Cadastrar</button>
            </Link>
          </form>
          <div className="login">
            <Link to="/Login">
                <button> JÁ TEM UMA CONTA? FAÇA LOGIN </button>
            </Link>
          </div>
        </div>
        <Footer />
      </body>
  )
}

export default Register;