// 只在開發環境加載 .env 文件  
if (process.env.NODE_ENV !== 'production') {  
  require('dotenv').config();  
}  
const app = require('./src/app');  
const connectDB = require('./src/config/db');  
const PORT = process.env.PORT || 3000;  
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
