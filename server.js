const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const uri = process.env.MONGODB_URI;

console.log("the server is :" + uri)

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});