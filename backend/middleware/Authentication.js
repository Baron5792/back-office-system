const express = require('express');
const router = express.Router();
const connection = require('../config/database');

const isAuthenticated = async (req, res, next) => {
    try {
        if (!req.session.userId) {
            return res.status(401).json({ success: false, message: 'Authentication error' });
        }

        const [fetchLoggedInUser] = await connection.execute('SELECT * FROM users WHERE id = ?', [req.session.userId]);
        if (fetchLoggedInUser.length === 0) {
            req.session.destroy((err) => {
                if (err) {
                    console.log(`An error occured while destroying session: ${err}`)
                }
                return res.status(401).json({ success: false, message: 'Unauthorized access' });
            })
        }

        req.user = fetchLoggedInUser[0];
        return next();
    }

    catch (error) {
        return res.status(500).json({ success: false, message: `Internal server error: ${error.message}` });
    }
}

module.exports = isAuthenticated;