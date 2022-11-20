import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from "react"

import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import UserPage from "./UserPage"
import Entries from "./Entries"
import Exits from "./Exits"

import "./App.css";

import { AuthProvider } from './Contexts/auth';

export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/userPage" element={<UserPage />} />
            <Route path="/entries" element={<Entries />} />
            <Route path="/exits" element={<Exits />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
    )
}