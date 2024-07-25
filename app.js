const express = require('express');
const cors = require('cors');
const compression = require('compression');
const userRouter = require('./routers/userRouter');
const orderRouter = require('./routers/orderRouter');

const app = express();

app.use(cors());
app.use(compression());

app.use(express.json());

app.use('/users', userRouter);
app.use('/orders', orderRouter);

module.exports = app;