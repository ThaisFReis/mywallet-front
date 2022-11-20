import { Link } from 'react-router-dom';
import React, { useState } from 'react';

// CSS
import "../../Assets/Styles/UserPage.css";

// Import
import Footer from '../Footer';
import Header from '../Header';

const registerArray = [
  {
    date: "00/00/0000",
    item: "Nome do registro",
    value: "0.000.000,00",
    color: "#03AC00"
  },
  {
    date: "00/00/0000",
    item: "Nome do registro",
    value: "0.000.000,00",
    color: "#C70000"
  },
  {
    date: "00/00/0000",
    item: "Nome do registro",
    value: "0.000.000,00",
    color: "#03AC00"
  },
  {
    date: "00/00/0000",
    item: "Nome do registro",
    value: "0.000.000,00",
    color: "#C70000"
  },
  {
    date: "00/00/0000",
    item: "Nome do registro",
    value: "0.000.000,00",
    color: "#03AC00"
  }
]

/*
const renderRegister = registerArray.map((item, index) => {
  <div className="userPage_register_content_body" key={index}>
    <div className="userPage_register_content_body_date">
      <p>{item.date}</p>
    </div>
    <div className="userPage_register_content_body_item">
      <p>{item.item}</p>
    </div>
    <div className="userPage_register_content_body_value">
      <p style={item.color}>{item.value}</p>
    </div>
  </div>
})
*/

function  UserPage  () {
  const [register, setRegister] = useState(0);

   return (
       <body>
        <Header />
         <div className="userPage">
            <div className="userPage_register">
              {
                register === 0 ?
                  <p>Não há registros de entradas ou saídas</p>
                :
                <>
                  <div className="userPage_register_content">
                  </div>
                  <div className="userPage_register_content_footer">
                    <p>Saldo</p>
                    <div className="userPage_register_content_footer_value">
                      <p>0000,00</p>
                    </div>
                  </div>
                </>
              }
            </div>
            <div className="menu">
              <Link to="/userPage/entries">
                <div className="menu_item">
                  <ion-icon name="add-circle-outline"></ion-icon>
                  <p>Entradas</p>
                </div>
              </Link>
              <Link to="/userPage/exits">
                <div className="menu_item" id="dois">
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Saídas</p>
                </div>
              </Link>
            </div>
         </div>
        <Footer />
       </body>
   )
}

export default  UserPage ;