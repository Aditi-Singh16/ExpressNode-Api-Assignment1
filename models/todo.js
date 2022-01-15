const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const todoSchema   = new mongoose.Schema({
    name: {
        type: String,
        required:true
    }
});

mongoose.model('Todo', todoSchema);
