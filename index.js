require('dotenv').config();  
const app = require('./src/app');  
const connectDB = require('./src/config/db');  
const PORT = process.env.PORT || 3000;  
// 嘗試連接資料庫，但不阻止應用啟動  
connectDB()  
  .then(() => {  
    console.log('✅ Database connected successfully');  
  })  
  .catch((err) => {  
    console.error('⚠️ Database connection failed:', err.message);  
    console.log('⚠️ Starting server without database connection...');  
  });  
app.listen(PORT, () => {  
  console.log(`Server is running on port ${PORT}`);  
});  
