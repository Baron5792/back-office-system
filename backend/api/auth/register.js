const connection = require('../../config/database');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.post('/register', async (req, res) => {
    const { firstname, lastname, email, password, confirm_password } = req.body;

    if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required to proceed' });
    }

    if (password !== confirm_password) {
        return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }

    if (password.length < 6) {
        return res.status(400).json({ success: false, message: 'Password length should exceed 6 characters' });
    }

    try {
        // check if email exist
        const [existingUser] = await connection.execute('SELECT email FROM users WHERE email = ?', [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ success: false, message: 'Email has already been registered' });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const [newUser] = await connection.execute('INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)', [firstname, lastname, email, hashedPassword]);

        if (newUser.affectedRows === 0) {
            return res.status(500).json({ success: false, message: 'An error occured while creating user.' });
        }

        return res.status(201).json({ success: true, message: 'Registration successful' });
    }

    catch (error) {
        return res.status(500).json({ success: false, message: `Internal server error: ${error.message}` });
    }
})

module.exports = router;