const express = require('express');
const router = express.Router();
const databases = require('../../db');
const pool = databases.ujjweb;

// Example GET request handler for /projects route
router.get('/projects', async (req, res) => {
  try {
    // Specify needed columns (replace with actual columns if needed)
    const [rows] = await pool.query('SELECT id, name, description FROM projects');
    console.log(rows)
    res.json(rows);
  } catch (err) {
    console.error("Error fetching projects:", err);
    let errorMessage = 'Server Error'; // Default message

    switch (err.code) {
      case 'ER_DUP_ENTRY':
        errorMessage = 'Duplicate entry found.';
        break;
      case 'ER_NO_DATA_FOUND':
        errorMessage = 'No projects found.';
        break;
      // Add more cases for specific error codes
      default:
        // Handle other errors
    }

    res.status(500).send(errorMessage);
  }
});

module.exports = router;
