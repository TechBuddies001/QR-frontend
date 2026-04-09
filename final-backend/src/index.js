// Deploy Timestamp: 2026-04-07T13:02:40Z
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const { rateLimit } = require('express-rate-limit');

const authRoutes = require('./routes/auth');
const tagRoutes = require('./routes/tags');
const publicRoutes = require('./routes/public');
const callRoutes = require('./routes/calls');
const smsRoutes = require('./routes/sms');
const dashboardRoutes = require('./routes/dashboard');
const planRoutes = require('./routes/plans');
const sponsorRoutes = require('./routes/sponsors');
const subscriptionRoutes = require('./routes/subscriptions');
const settingsRoutes = require('./routes/settings');

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet({ crossOriginResourcePolicy: { policy: 'cross-origin' } }));
app.use(cors()); // Allow all for local testing
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 200,
  message: { error: 'Too many requests, please try again later.' },
});
app.use('/api/', limiter);

// Logging & parsing
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files for uploads
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Tarkshya QR Backend',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/public', publicRoutes);
app.use('/api/calls', callRoutes);
app.use('/api/sms', smsRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/plans', planRoutes);
app.use('/api/sponsors', sponsorRoutes);
app.use('/api/subscriptions', subscriptionRoutes);
app.use('/api/settings', settingsRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Tarkshya QR Backend running on http://localhost:${PORT}`);
  console.log(`📦 Environment: ${process.env.NODE_ENV}`);
  console.log(`🗄️  Database: ${process.env.DATABASE_URL}`);
  console.log(`❤️  Health: http://localhost:${PORT}/health\n`);
});

module.exports = app;
