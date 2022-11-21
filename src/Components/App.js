import { Routes, Route } from "react-router-dom"
import React from "react"
import { useState } from "react"

import Home from "./Home"
import Login from "./Login"
import SingUp from "./SingUp"
import UserPage from "./UserPage"
import Entries from "./Entries"
import Exits from "./Exits"

import "./App.css";

import userContext from './Contexts/userContext';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{ user, setUser}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singUp" element={<SingUp />} />
        <Route path="/userPage" element={<UserPage />} />
        <Route path="/entries" element={<Entries />} />
        <Route path="/exits" element={<Exits />} />
      </Routes>
    </userContext.Provider>
  );
}