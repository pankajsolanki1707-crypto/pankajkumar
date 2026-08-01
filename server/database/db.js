import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, 'database.json');

// In-Memory state synced with database.json
let dbData = {
  users: [
    {
      id: 'usr_admin_001',
      name: 'Pankaj Kumar (Author & Admin)',
      email: 'pankajsolanki1707@gmail.com',
      passwordHash: '$2a$12$K89s1h...placeholder...',
      role: 'Administrator',
      verified: true,
      twoFactorEnabled: false,
      failedLoginAttempts: 0,
      lockoutUntil: null,
      createdAt: new Date().toISOString()
    }
  ],
  orders: [],
  downloadLogs: [],
  auditLogs: [],
  contactMessages: [],
  idempotencyKeys: {}
};

// Initialize DB file
function loadDatabase() {
  if (fs.existsSync(DB_FILE)) {
    try {
      const data = fs.readFileSync(DB_FILE, 'utf-8');
      dbData = { ...dbData, ...JSON.parse(data) };
    } catch (e) {
      console.error('Error reading database.json, using default schema:', e);
    }
  } else {
    saveDatabase();
  }
}

function saveDatabase() {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(dbData, null, 2), 'utf-8');
  } catch (e) {
    console.error('Error writing database.json:', e);
  }
}

loadDatabase();

// DB Query Abstraction Methods
export const db = {
  // Users
  findUserByEmail: (email) => dbData.users.find(u => (u.email || '').toLowerCase() === (email || '').toLowerCase()),
  findUserById: (id) => dbData.users.find(u => u.id === id),
  createUser: (userData) => {
    dbData.users.push(userData);
    saveDatabase();
    return userData;
  },
  updateUser: (id, updates) => {
    const idx = dbData.users.findIndex(u => u.id === id);
    if (idx !== -1) {
      dbData.users[idx] = { ...dbData.users[idx], ...updates };
      saveDatabase();
      return dbData.users[idx];
    }
    return null;
  },

  // Orders & Transactions
  findOrderById: (orderId) => dbData.orders.find(o => 
    o.id === orderId || 
    o.orderId === orderId || 
    o.cashfreeOrderId === orderId || 
    o.razorpayOrderId === orderId
  ),
  findOrdersByEmail: (email) => dbData.orders.filter(o => 
    (o.customerEmail || '').toLowerCase() === (email || '').toLowerCase() && 
    (o.status === 'VERIFIED' || o.status === 'COMPLETED')
  ),
  hasUserPurchasedBook: (email, bookId) => {
    if (!email || !bookId) return false;
    return dbData.orders.some(o => 
      (o.customerEmail || '').toLowerCase() === email.toLowerCase() && 
      o.bookId === bookId && 
      (o.status === 'VERIFIED' || o.status === 'COMPLETED' || o.status === 'PENDING')
    );
  },
  createOrder: (orderData) => {
    const normalizedOrder = {
      id: orderData.orderId || orderData.id || `ORD-${Date.now()}`,
      orderId: orderData.orderId || orderData.id,
      ...orderData
    };
    dbData.orders.push(normalizedOrder);
    saveDatabase();
    return normalizedOrder;
  },
  updateOrderStatus: (id, status, paymentId) => {
    const order = dbData.orders.find(o => 
      o.id === id || 
      o.orderId === id || 
      o.cashfreeOrderId === id || 
      o.razorpayOrderId === id
    );
    if (order) {
      order.status = status;
      if (paymentId) order.paymentId = paymentId;
      saveDatabase();
    } else {
      // If order object wasn't found in memory, create a verified order record
      dbData.orders.push({
        id: id || `ORD-${Date.now()}`,
        orderId: id,
        status: status || 'VERIFIED',
        paymentId: paymentId || id,
        createdAt: new Date().toISOString()
      });
      saveDatabase();
    }
  },

  // Idempotency
  checkIdempotency: (key) => dbData.idempotencyKeys[key],
  setIdempotency: (key, value) => {
    dbData.idempotencyKeys[key] = value;
    saveDatabase();
  },

  // Download Logs
  logDownload: (logData) => {
    dbData.downloadLogs.push({ ...logData, timestamp: new Date().toISOString() });
    saveDatabase();
  },
  getDownloadLogs: () => dbData.downloadLogs,

  // Audit Logs (OWASP Security Monitoring)
  logSecurityEvent: (eventType, details, severity = 'INFO') => {
    const event = {
      id: `audit_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      eventType,
      details,
      severity,
      timestamp: new Date().toISOString()
    };
    dbData.auditLogs.unshift(event);
    if (dbData.auditLogs.length > 500) dbData.auditLogs.pop();
    saveDatabase();
    return event;
  },
  getAuditLogs: () => dbData.auditLogs,

  // Contact Messages
  saveContactMessage: (msg) => {
    dbData.contactMessages.unshift(msg);
    saveDatabase();
    return msg;
  },
  getContactMessages: () => dbData.contactMessages
};
