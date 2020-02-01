const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./backend/routes/userRoute');
const toppingRouter = require('./backend/routes/toppingRoute');
const drinkRouter = require('./backend/routes/drinkRoute');
const sideRouter = require('./backend/routes/sideRoute.js');
const favoriteRouter = require('./backend/routes/favoriteRoute');
const orderRouter = require('./backend/routes/orderRoute');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/api/user', userRouter);
app.use('/api/topping', toppingRouter);
app.use('/api/drink', drinkRouter);
app.use('/api/side', sideRouter);
app.use('/api/favorite', favoriteRouter);
app.use('/api/order', orderRouter);

const uri = process.env.MONGODB_URI;

console.log("the server is :" + uri)

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});