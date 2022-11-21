import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import dayjs from 'dayjs';
import axios from 'axios';

// CSS
import "../../Assets/Styles/UserPage.css";

// Import
import Footer from '../Footer';
import Header from '../Header';

// userContext and api are imported from other files
import { userContext } from "../Contexts/userContext"

function  UserPage  () {
  const [ user, token ] = useContext(userContext);
  const [ entries, setEntries ] = useState([]);
  const [ total, setTotal ] = useState(0);

  const navigate = useNavigate();

  if (!user || !token) {
    navigate("/login");
  }

  useEffect(() => {

    async function getEntries() {
      try {
        const response = await axios.get("/entries", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEntries(response.data);
      } catch (error) {
        alert("Não foi possível carregar os registros");
      }
    }

    getEntries();
  }, [token]);

  // Total
  useEffect(() => {
    let total = 0;

    entries.forEach((entry) => {
      if (entry.type === "-") {
        total -= entry.value;
      } else {
        total += entry.value;
      }
    });
    setTotal(total);
  }, [entries]);

  return (
    <>
      <Header />
        <div className="userPage">
          <div className="userPage_register">
            { entries.length === 0 && <p>Nenhum registro encontrado</p> }
            { entries.length > 0 && (
              <>
                { entries.map((item, index) => (
                    <div className="userPage_register_content_body" key={index}>
                      <div className="userPage_register_content_body_date">
                        <p>{dayjs(item.date).format("DD/MM/YY")}</p>
                      </div>
                      <div className="userPage_register_content_body_item">
                        <p>{item.description}</p>
                      </div>
                      <div className="userPage_register_content_body_value">
                        <p style={item.type === "+" ? { color: "#03AC00" } : { color: "#C70000" }}>{(parseFloat(item.value).toFixed(2)).replace(".", ",")}</p>
                      </div>
                    </div>
                  ))
                }
                <div className="userPage_register_content_footer">
                  <p>Saldo</p>
                  <div className="userPage_register_content_footer_value">
                    <p>{(parseFloat(total).toFixed(2)).replace(".", ",")}</p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="menu">
            <Link to="/entries">
              <div className="menu_item">
                <ion-icon name="add-circle-outline"></ion-icon>
                <p>Nova entrada</p>
              </div>
            </Link>
            <Link to="/exits">
              <div className="menu_item" id="dois">
                <ion-icon name="add-circle-outline"></ion-icon>
                <p>Nova saída</p>
              </div>
            </Link>
          </div>
        </div>
      <Footer />
    </>
  );
}

export default UserPage;