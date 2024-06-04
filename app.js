const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');

const databases = require('./src/db');

const poetryPool = databases.poetry;
const ujjwebPool = databases.ujjweb;
const sciencePool = databases.science;

// Feltételezzük, hogy a különböző routereket importálod
const userRoutes = require('./src/routes/poetry/userRoutes');
const poemRoutes = require('./src/routes/poetry/poemRoutes');
const authRoutes = require('./src/routes/poetry/authRoutes');
const commentRoutes = require('./src/routes/poetry/commentRoutes');
const albumRoutes = require('./src/routes/poetry/albumRoutes');
const followRoutes = require('./src/routes/poetry/followRoutes');
const labelRoutes = require('./src/routes/poetry/labelRoutes');
const ujjwebRoutes = require('./src/routes/ujjwebRoutes/ujjwebRoutes')

const app = express();
app.use(express.json());
const ujjwebBuildPath = path.join(__dirname, 'ujjweb', 'build');
const poetryBuildPath = path.join(__dirname, 'poetry', 'build');

const corsOptions = {
  origin: ['http://ujjweb.hu/poetry', 'http://www.ujjweb.hu/ujjweb', 'http://185.43.207.13:3069/'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));


app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));


// app.use((req, res, next) => {
//   const host = req.headers.host;

//   if (host === 'www.poetry.ujjweb.hu') {
//     return express.static(poetryBuildPath)(req, res, next);
//   }
  
//   express.static(ujjwebBuildPath)(req, res, next);
// });


app.use('/poetry', express.static(poetryBuildPath));
app.get('/poetry/', (req, res) => {
  res.sendFile(path.join(poetryBuildPath, 'index.html'));
});
app.use('/api/poetry/users', userRoutes);
app.use('/api/poetry/poems', poemRoutes);
app.use('/api/poetry/auth', authRoutes);
app.use('/api/poetry/comments', commentRoutes);
app.use('/api/poetry/albums', albumRoutes);
app.use('/api/poetry/follows', followRoutes);
app.use('/api/poetry/labels', labelRoutes);



app.use('/ujjweb', express.static(ujjwebBuildPath));
app.get('/ujjweb/*', (req, res) => {
  res.sendFile(path.join(ujjwebBuildPath, 'index.html'));
});
app.use('/api/ujjweb', ujjwebRoutes);



const PORT = process.env.PORT || 3069;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});