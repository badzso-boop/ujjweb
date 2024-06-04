// src/routes/ujjwebRoutes.js
const express = require('express');
const router = express.Router();
const databases = require('../../db');
const pool = databases.ujjweb;

// Például egy GET kérés kezelése a /projects útvonalon
router.get('/projects', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projects');
    res.json(rows);
  } catch (err) {
    console.error("Valami hiba:", err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
