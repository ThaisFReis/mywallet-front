import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import axios from 'axios';

// CSS
import "../../Assets/Styles/Entries.css";

// Import
import Footer from '../Footer';
import Header from '../Header';

// userContext and api are imported from other files
import { userContext } from "../Contexts/userContext"

function Entries () {
    const { user, token} = useContext(userContext);
    const [ value, setValue ] = useState("");
    const [ description, setDescription ] = useState("");

    const navigate = useNavigate();

    if (!token) {
        navigate("/login");
    }
    
    async function handleSubmit(e){
        e.preventDefault();
        

        const body = {
            value: "",
            description: "",
            type: "+",
        };

        const headers = {
            headers: { Authorization: `Bearer ${token}` },
        };

        try {
            const response = await axios.post("/entries", body, headers);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <Header />
        <div className="entriesPage">
            <Link to="/userPage">
                <div className="back">
                    <ion-icon name="arrow-undo"></ion-icon>
                </div>
            </Link>
            <div className="header">
                <h1>Nova Entrada</h1>
            </div>
            <div className="entriesPage_content">
                <form>
                    <label htmlFor="value">Valor:</label>
                    <input type="number" name="value" id="value" value={value} onChange={e => setValue(e.target.value)} placeholder="Valor" />
                    <label htmlFor="description">Descrição:</label>
                    <input type="text" name="description" id="description" value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" />
                    <button type="submit" onClick={handleSubmit}>Salvar</button>
                </form>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default Entries;