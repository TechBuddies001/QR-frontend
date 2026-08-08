const jwt = require('jsonwebtoken');
const prisma = require('../lib/prisma');

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  let token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
  
  // Fallback to query param for direct downloads
  if (!token && req.query.token) {
    token = req.query.token;
  }

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    if (decoded.role === 'partner') {
      const partner = await prisma.partner.findUnique({
        where: { id: decoded.id },
      });
      if (!partner) return res.status(401).json({ error: 'Partner not found' });
      req.user = partner;
      req.partner = partner; // Also set req.partner just in case
      return next();
    } else {
      // Default Admin logic
      const admin = await prisma.admin.findUnique({
        where: { id: decoded.id },
        select: { id: true, email: true, name: true, role: true },
      });
  
      if (!admin) {
        return res.status(401).json({ error: 'Admin not found' });
      }
  
      req.admin = admin;
      return next();
    }
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    return res.status(403).json({ error: 'Invalid token' });
  }
};

module.exports = { authenticateToken };
