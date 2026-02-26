const mongoose = require('mongoose');

// 根據你的資料結構定義 Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    required: true
  }
}, { 
  // 重要：確保對應到 Zeabur 上的集合名稱 "User"
  collection: 'User', 
  timestamps: true 
});

module.exports = mongoose.model('User', userSchema);
