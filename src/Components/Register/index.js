import axios from 'axios';
import { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

// CSS
import "../../Assets/Styles/Register.css";

// Import
import Footer from '../Footer';

// userContext and api are imported from other files
import { userContext } from "../Contexts/userContext"
import api from '../Services/api';

function Register () {
  const [ formData, setFormData ] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  //Handle Submit
  async function handleSubmit(e){
    e.preventDefault();

    if(formData.password !== formData.confirmPassword && formData.confirmPassword !== "") {
      alert("Senhas não conferem");
    }

    try {
      await api.login({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  // Handle Change
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
      <>
        <div className="registerPage">
          <div className="header">
            <h1>CADASTRO</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input type="name" name="name" id="name" value={formData.name} onChange={handleChange} required />
            <label htmlFor="email">E-mail:</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
            <label htmlFor="password">Senha:</label>
            <input type="password" name="password" id="password" value={formData.password} onChange={handleChange} required />
            <label htmlFor="confirmPassword">Confirme sua senha:</label>
            <input type="password" name="confirmPassword" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            <button type="submit">Cadastrar</button>
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