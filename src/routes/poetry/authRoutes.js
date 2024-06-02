// src/routes/authRoutes.js

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const databases = require('../../db');
const pool = databases.poetry;

// Regisztráció
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Hasheljük a jelszót
  const hashedPassword = await bcrypt.hash(password, 10);

  const role = "user";

  try {
    // Ellenőrizze, hogy van-e már ilyen felhasználó az adatbázisban
    const existingUser = await pool.query('SELECT * FROM users WHERE username = ? OR email = ?', [username, email]);

    if (existingUser[0].length > 0) {
      if (existingUser[0][0].username === username) {
        return res.status(400).json({ error: 'Bad Request', errorMessage: 'A felhasználónév foglalt, kérlek válassz másikat.' });
      } else if (existingUser[0][0].email === email) {
        return res.status(400).json({ error: 'Bad Request', errorMessage: 'Az email cím foglalt, kérlek válassz másikat.' });
      }
    }

    // Vegyük fel az új felhasználót az adatbázisba
    await pool.query('INSERT INTO users (username, email, password_hash, role) VALUES (?, ?, ?, ?)', [username, email, hashedPassword, role]);
    res.status(201).json({ message: 'Sikeres regisztráció.' });
  } catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ error: 'Internal Server Error', errorMessage: error.message });
  }
});


// Bejelentkezés
router.post('/login', async (req, res) => {
  console.log(req.body)
  const { username, password } = req.body;
  console.log(username)

  try {
    // Ellenőrizzük a felhasználónevet és a jelszót
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

    if (rows.length === 1) {
      const user = rows[0];

      // Ellenőrizzük a jelszót
      const isPasswordValid = await bcrypt.compare(password, user.password_hash);

      if (isPasswordValid) {
        // Sikeres bejelentkezés
        req.session.userId = user.user_id; // Példa: session használata
        req.session.username = user.username
        req.session.role = user.role

        res.json({ message: 'Login successful.', userId: user.user_id });
      } else {
        res.status(401).json({ error: 'A jelszó helytelen.' });
      }
    } else {
      res.status(404).json({ error: 'Nincs ilyen felhasználó.' });
    }
  } catch (error) {
    console.error('Error logging in:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Kijelentkezés
router.get('/logout', (req, res) => {
    // Töröljük a session-t
    req.session.destroy((err) => {
      if (err) {
        console.error('Error logging out:', err.message);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ message: 'Logout successful.' });
      }
    });
});

// Azonosítás ellenőrzése
router.get('/check-auth', (req, res) => {
  if (req.session.userId) {
    res.json({ authenticated: true, userId: req.session.userId, username: req.session.username});
  } else {
    res.json({ authenticated: false });
  }
});

module.exports = router;
