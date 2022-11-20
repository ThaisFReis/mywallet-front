import React, { useState, useEffect, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {api, createSession} from "../Contexts/auth.js"

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const recoveredUser = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }
    }, []);

    const login = async (email, password) => {
        const response = await createSession({ email, password });
        console.log("login", response.data);

        const loggedUser = response.data.user;
        const token = response.data.token;

        localStorage.setItem('user', JSON.stringify(loggedUser));
        localStorage.setItem('token', token);

        api.defaults.headers.Authorization = `Bearer ${token}`;

        setUser(loggedUser);
        recoveredUser('/userPage');
    };

    const logout = () => {
        console.log("logout");

        localStorage.removeItem('user');
        localStorage.removeItem('token');

        api.defaults.headers.Authorization = null;

        setUser(null);
        navigate('/');
        window.location.reload();
    };

    return (
        <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};