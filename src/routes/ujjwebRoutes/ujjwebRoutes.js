// src/routes/ujjwebRoutes.js
const express = require('express');
const router = express.Router();
const databases = require('../../db');

const ujjwebPool = databases.ujjweb;

// Például egy GET kérés kezelése a /projects útvonalon
router.get('/projects', async (req, res) => {
  try {
    const [rows] = await ujjwebPool.query('SELECT * FROM projektek');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
