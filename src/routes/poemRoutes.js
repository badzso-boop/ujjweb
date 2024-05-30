const express = require('express');
const router = express.Router();

const poems = [
  { id: 1, title: "Poem1", content: "Content of Poem1" },
  { id: 2, title: "Poem2", content: "Content of Poem2" },
];

router.get("/", (req, res) => {
  res.json(poems);
});

module.exports = router;