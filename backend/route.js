const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, './.env') });
const session = require('express-session');

app.use(express.json());
app.use(session({
    secret: process.env.SECRET_SESSION,
    saveUninitialized: true,
    resave: false,
    cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'lax'
    }
}))


const corsOption = {
    origin: process.env.REACT_APP_API_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'] 
}

app.use(cors(corsOption));


// routes here
app.use('/api/auth', require('./api/auth/register'));
app.use('/api/auth', require('./api/auth/login'));
app.use('/auth', require('./middleware/check-auth'));





const PORT = process.env.SERVER_PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
