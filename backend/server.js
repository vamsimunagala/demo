require('dotenv').config();
const express = require("express");
const app = express();

const productRoutes = require('./routes/productRoutes');

const connectDB = require('./config/db');
connectDB();

app.use(express.json());


app.use('/api/products', productRoutes);





const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
}   );