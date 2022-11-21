import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import axios from 'axios';

// CSS
import "../../Assets/Styles/Exits.css"

// Import
import Footer from '../Footer';
import Header from '../Header';

// Import userContext from context
import userContext from '../Contexts/userContext.js';

function Exits () {
    const { user } = useContext(userContext);
    const [ value, setValue ] = useState("");
    const [ description, setDescription ] = useState("");

    const navigate = useNavigate();

    if (!user.token) {
        navigate("/login");
    }

    async function handleSubmit(e){
        e.preventDefault();

        const body = {  
            value,
            description,
            type: "-",
        };

        const headers = {
            headers: { Authorization: `Bearer ${user.token}` }
        };

        try {
            const response = await axios.post("http://localhost:5000/entries", body, headers);
            console.log(response);

            navigate("/userPage");
        } catch (error) {
            console.log(error);
        }
    }
    
      return (
     <>
          <Header />
          <div className="exitsPage">
            <Link to="/userPage">
                <div className="back">
                    <ion-icon name="arrow-undo"></ion-icon>
                </div>
            </Link>
                <div className="header">
                 <h1>Nova Saída</h1>
                </div>
                <div className="exitsPage_content">
                 <form>
                    <label htmlFor="value">Valor</label>
                    <input type="text" name="value" id="value" placeholder="Valor" value={value} onChange={e => setValue(e.target.value)} />
                    <label htmlFor="description">Descrição</label>
                    <input type="text" name="description" id="description" placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)} />
                    <button type="submit" onClick={handleSubmit}>Salvar</button>
                 </form>
                </div>
          </div>
          <Footer />
     </>
      );
}

export default Exits;