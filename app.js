const express = require('express');

const userRoute = require('./routes/userRoute');
const cartRoute = require('./routes/cartRoute');
const productRoute = require('./routes/productRoute');
const orderRoute = require('./routes/orderRoute');

const app = express();
// const morgan = require('morgan');
// console.log(proccess.env.NODE_ENV);
// app.use(morgan('dev')); 
app.use(express.json());

app.use('/api/v1/user',userRoute)
app.use('/api/v1/order',orderRoute)
app.use('/api/v1/product',productRoute)
app.use('/api/v1/cart',cartRoute)

module.exports = app;  