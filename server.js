const express = require("express");
const mongoose = require('mongoose');
const app = express();
const cors = require("cors");
app.use(cors())

mongoose.connect("mongodb+srv://aditi:<password>@cluster0.mingc.mongodb.net/todoApp", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Connection Successful"))
    .catch((err) => console.log(err));



require("./models/todo")
app.use(express.json());
app.use(require('./routes/todos'))

app.listen(3000, function (req, res) {
    console.log("express server is running on 3000");
})
