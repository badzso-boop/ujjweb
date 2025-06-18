require('dotenv').config();

const express = require('express');
const session = require('express-session');
const cors = require('cors');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const databases = require('./src/db');

const poetryPool = databases.poetry;
const ujjwebPool = databases.ujjweb;
const sciencePool = databases.science;

const userRoutes = require('./src/routes/poetry/userRoutes');
const poemRoutes = require('./src/routes/poetry/poemRoutes');
const authRoutes = require('./src/routes/poetry/authRoutes');
const commentRoutes = require('./src/routes/poetry/commentRoutes');
const albumRoutes = require('./src/routes/poetry/albumRoutes');
const followRoutes = require('./src/routes/poetry/followRoutes');
const labelRoutes = require('./src/routes/poetry/labelRoutes');
const ujjwebRoutes = require('./src/routes/ujjwebRoutes/ujjwebRoutes')

const startDailyNotificationJob = require('./src/scheduler/notification');

const app = express();

startDailyNotificationJob();

app.use(express.json());
const ujjwebBuildPath = path.join(__dirname, 'ujjweb', 'build');
const poetryBuildPath = path.join(__dirname, 'poetry', 'build');
const engineBuildPath = path.join(__dirname, 'engine');
const napikupakBuildPath = path.join(__dirname, 'napikupak');
const ujjandujjBuildPath = path.join(__dirname, 'ujandujj');


const corsOptions = {
  origin: ['http://ujjweb.hu/poetry', 'http://www.ujjweb.hu/ujjweb', 'http://185.43.207.13:3069/', 'http://www.ujjweb.hu', 'http://185.43.207.13:3069/api/*', 'http://ujjweb.hu', 'http://localhost:3069', 'http://127.0.0.1:3069', 'http://www.ujjweb.hu/api'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};

app.use(cors(corsOptions));


app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

app.use('/timeline', createProxyMiddleware({
  target: 'http://185.43.207.13:4000/',
  changeOrigin: true,
}));

app.use('/_next', createProxyMiddleware({
  target: 'http://185.43.207.13:4000/',
  changeOrigin: true,
}));

app.use('/public', createProxyMiddleware({
  target: 'http://185.43.207.13:4000/',
  changeOrigin: true,
}));

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


app.use('/engine', express.static(engineBuildPath));
app.get('/engine/', (req, res) => {
  res.sendFile(path.join(engineBuildPath, 'index.html'));
});

app.use('/napikupak', express.static(napikupakBuildPath));
app.get('/napikupak/', (req, res) => {
  res.sendFile(path.join(napikupakBuildPath, 'index.html'));
});
app.get('/OneSignalSDKWorker.js', (req, res) => {
  res.sendFile(path.join(napikupakBuildPath, 'OneSignalSDKWorker.js'));
});

app.get('/ujjandujj/', (req, res) => {
  res.redirect('http://185.43.207.13/ujjandujj');
});

app.get('/', (req, res) => {
  res.redirect('/ujjweb');
});

const PORT = process.env.PORT || 3069;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});