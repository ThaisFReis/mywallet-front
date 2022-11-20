import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import dayjs from 'dayjs';

// CSS
import "../../Assets/Styles/UserPage.css";

// Import
import Footer from '../Footer';
import Header from '../Header';

// userContext and api are imported from other files
import { userContext } from "../Contexts/userContext"
import api from '../Services/api';

function  UserPage  () {
  const [ user, token ] = useContext(userContext);

  const navigate = useNavigate();

  const [ register, setRegister ] = useState([]);
  const [ total, setTotal ] = useState(0);
  const [ type, settype ] = useState("");

  if (!user || !token) {
    navigate("/login");
  }

  // Get Entries
  useEffect(() => {
    api.getEntries(token)
      .then((response) => {
        setRegister(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, [token]);

  // Total
  useEffect(() => {
    let total = 0;
    register.forEach((item) => {
      if (item.type === "+") {
        total += item.value;
      } else {
        total -= item.value;
      }
    });
    setTotal(total);
  }, [register]);

  // Type
  useEffect(() => {
    let type = "";
    if (total < 0) {
      type = "negative";
    } else if (total > 0) {
      type = "positive";
    } else {
      type = "neutral";
    }
    settype(type);
  }, [total]);

  return (
    <>
      <Header />
        <div className="userPage">
          <div className="userPage_register">
            { register.length === 0 && <p>Nenhum registro encontrado</p> }
            { register.length > 0 && (
              <>
                { register.map((item, index) => (
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