const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');

// Feltételezzük, hogy a különböző routereket importálod
// const userRoutes = require('./routes/userRoutes');
// const poemRoutes = require('./routes/poemRoutes');
// const authRoutes = require('./routes/authRoutes');
// const commentRoutes = require('./routes/commentRoutes');
// const albumRoutes = require('./routes/albumRoutes');
// const followRoutes = require('./routes/followRoutes');
// const labelRoutes = require('./routes/labelRoutes');

const app = express();
const ujjwebBuildPath = path.join(__dirname, 'ujjweb', 'build');
const poetryBuildPath = path.join(__dirname, 'poetry', 'build');

const corsOptions = {
  origin: ['http://localhost:3000'], // Engedélyezett eredet
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Engedélyezd a cookie-k elküldését
};

app.use(cors(corsOptions));

// Session middleware
app.use(session({
  secret: 'your-secret-key', // Titkos kulcs a session-ök titkosításához
  resave: false,
  saveUninitialized: true
}));

const poetryRouter = express.Router();
const ujjwebRouter = express.Router();

// ujjwebRouter.use('/users', userRoutes);
// ujjwebRouter.use('/poems', poemRoutes);
// ujjwebRouter.use('/auth', authRoutes);
// ujjwebRouter.use('/comments', commentRoutes);
// ujjwebRouter.use('/albums', albumRoutes);
// ujjwebRouter.use('/follows', followRoutes);
// ujjwebRouter.use('/labels', labelRoutes);

// Az első React alkalmazás kiszolgálása a /app1 útvonalon
app.use('/ujjweb', express.static(ujjwebBuildPath));
app.get('/ujjweb/*', (req, res) => {
  res.sendFile(path.join(ujjwebBuildPath, 'index.html'));
});

app.use('/poetry', express.static(poetryBuildPath));
app.get('/poetry/*', (req, res) => {
  res.sendFile(path.join(poetryBuildPath, 'index.html'));
});

app.use('/ujjweb', ujjwebRouter);
app.use('/poetry', poetryRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});