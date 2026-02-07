const express = require('express');
const router = express.Router();
const isAuthenticated = require('./Authentication');

router.get('/check-auth', isAuthenticated, async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ success: false, message: 'Not authenticated' });
        }

        return res.status(200).json({
            success: true,
            isAuthenticated: true,
            user: req.user
        })
    }

    catch (error) {
        return res.status(500).json({ success: false, message: `Internal server error: ${error.message}` });
    }
})

module.exports = router;