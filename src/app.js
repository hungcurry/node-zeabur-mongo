const express = require('express');
const app = express();

app.use(express.json());

// 測試用的路由
app.get('/', (req, res) => {
  res.send('Express Server is running and connected to Zeabur MongoDB!');
});

// 健康檢查路由 (部屬時很有用)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = app;
