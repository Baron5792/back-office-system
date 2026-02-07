const express = require('express');
const connection = require('../../config/database');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required to proceed' });
    }

    try {
        // check if email exist
        const [existingUser] = await connection.execute('SELECT id, password FROM users WHERE email = ?', [email]);
        if (existingUser.length === 0) {
            return res.status(404).json({ success: false, message: 'Incorrect email or password' });
        }

        // if the email exist verify the password
        const user = existingUser[0];

        const isVerified = await bcrypt.compare(password, user.password);
        if (!isVerified) {
            return res.status(400).json({ success: false, message: 'Incorrect email or password' });
        }

        req.session.userId = user.id;
        return res.status(200).json({ success: true, message: 'Login successful' });
    }

    catch (error) {
        return res.status(500).json({ success: false, message: `Internal server error: ${error.message}` });
    }
})

module.exports = router;