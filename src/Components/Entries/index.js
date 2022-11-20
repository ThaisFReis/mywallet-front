import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useContext } from 'react';

// CSS
import "../../Assets/Styles/Entries.css";

// Import
import Footer from '../Footer';
import Header from '../Header';

// userContext and api are imported from other files
import { userContext } from "../Contexts/userContext"
import api from '../Services/api';

function Entries () {
    const [ token ] = useContext(userContext);
    const [ entries, setEntries ] = useState({
        value: "",
        description: "",
        type: "+",
    });
    const navigate = useNavigate();

    if (!token) {
        navigate("/login");
    }

    /*Handle Submit
    async function handleSubmit(e){
        e.preventDefault();

        try {
            await api.
*/
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
                    <label htmlFor="value">Valor</label>
                    <input type="text" name="value" id="value" placeholder="R$ 0,00" />
                    <label htmlFor="description">Descrição</label>
                    <input type="text" name="description" id="description" placeholder="Descrição" />
                    <button type="submit">Salvar</button>
                </form>
            </div>
        </div>
        <Footer />
    </>
  );
}

export default Entries;