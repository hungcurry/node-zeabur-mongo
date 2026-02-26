const express = require('express');
const app = express();
const User = require('./models/User'); // 引入剛寫好的 Model

app.use(express.json());

// 原有的測試路由
app.get('/', (req, res) => {
  res.send('Express Server is running and connected to Zeabur MongoDB!');
});

// 健康檢查
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// 取得所有線上 User 資料的 API
app.get('/users', async (req, res) => {
  try {
    // 透過 Mongoose 查詢所有資料
    const users = await User.find();
    res.json({
      success: true,
      data: users
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: '無法取得資料',
      error: error.message
    });
  }
});

module.exports = app;
