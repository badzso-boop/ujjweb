const express = require('express');
const path = require('path');

const app = express();
const ujjwebBuildPath = path.join(__dirname, 'ujjweb', 'build');

// Az első React alkalmazás kiszolgálása a /app1 útvonalon
app.use('/ujjweb', express.static(ujjwebBuildPath));
app.get('/ujjweb/*', (req, res) => {
  res.sendFile(path.join(ujjwebBuildPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});