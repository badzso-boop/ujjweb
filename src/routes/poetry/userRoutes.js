// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const databases = require('../../db');
const pool = databases.poetry;
const User = require('../../models/poetry/user');
const Comment = require('../../models/poetry/comment');
const Like = require('../../models/poetry/like');
const Poem = require('../../models/poetry/poem');

const Functions = require('../../helpers/poetry/functions');


// Egy middleware, ami ellenőrzi, hogy a felhasználó be van-e jelentkezve
const checkAuth = (req, res, next) => {
  if (req.session && req.session.userId && req.session.role == "admin") {
    return next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

// GET all users
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    const users = rows.map(row => new User(row.user_id, row.username, row.email, row.password_hash, row.profile_img_url, row.role, null, null, row.bio));
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET a specific user
router.get('/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    const [userRows] = await pool.query('SELECT * FROM users WHERE user_id = ?', [userId]);

    const poems = await Functions.getPoemsByUser(userId)

    const [albumRows] = await pool.query('SELECT * FROM albums WHERE user_id = ?', [userId])

    let albumsWithPoems = {}

    if (albumRows.length > 0) {
      albumsWithPoems = await Promise.all(albumRows.map(async (album) => {
        const albumWithPoems = await Functions.getAlbumsByUser(album.user_id)

        return albumWithPoems
      }))
    }
    else {
      albumsWithPoems = []
    }

    if (userRows.length === 1) {
      const user = new User(userRows[0].user_id, userRows[0].username, userRows[0].email, userRows[0].password_hash, userRows[0].profile_image_url, userRows[0].role, poems, albumsWithPoems, userRows[0].bio)
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// DELETE a user by ID
router.delete('/:userId', async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const [result] = await pool.query('DELETE FROM users WHERE user_id = ?', [userId]);
  
      if (result.affectedRows === 1) {
        res.json({ message: 'User deleted successfully.' });
      } else {
        res.status(404).json({ error: 'User not found.' });
      }
    } catch (error) {
      console.error('Error deleting user:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

// PUT (update) a user by ID
router.put('/:userId', async (req, res) => {
    const userId = req.params.userId;
    const { bio } = req.body;
  
    try {
      const [result] = await pool.query(
        'UPDATE users SET  bio = ? WHERE user_id = ?',
        [bio, userId]
      );
  
      if (result.affectedRows === 1) {
        res.json({ message: 'User updated successfully.' });
      } else {
        res.status(404).json({ error: 'User not found.' });
      }
    } catch (error) {
      console.error('Error updating user:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;