import axios from 'axios';

export const baseURL = axios.create({
    baseURL: 'http://localhost:3000',
});

// Token
function createToken(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
}

// Login
function login(user) {
    const promise = axios.post('/login', {
        email: user.email,
        password: user.password,
    })
    return promise;
}

// Register
function register(user) {
    const promise = axios.post('/register', {
        name: user.name,
        email: user.email,
        password: user.password,
    })
    return promise;
}

// Post Entries
function postEntries(token, newEntries) {
    const promise = axios.post('/entries', newEntries, createToken(token));
    return promise;
}

// Get Entries
function getEntries(token) {
    const promise = axios.get('/entries', createToken(token));
    return promise;
}

// api
const api = {
    login,
    register,
    postEntries,
    getEntries,
}

export default api;