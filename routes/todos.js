const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Todo = mongoose.model("Todo");

router.get('/MyTodoApp/', function(req, res) {
    res.json({ message: 'Welcome to my RESTapi!' });
});

//post request
router.route('/MyTodoApp/createTodos').post(function(req, res) {
    var todo = Todo({
        name:req.body.name
    })
    todo.save(function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'Todo created!' });
    });
});

//get request
//get all todos
router.route('/MyTodoApp/getAllTodos').get(function(req,res){
    Todo.find(function(err, todos) {
        if (err)
            res.send(err);

        res.json(todos);
    });
})

//get todo by id
router.route('/MyTodoApp/getAtodo/:id').get(function(req,res){
    Todo.findById(req.params.id, function(err, todo) {
        if (err)
            res.send(err);
        res.json(todo);
    });
})

//put request
router.route('/MyTodoApp/todoUpdate/:id').put(function(req, res) {
    var todoModel = {
        name: req.body.name
    };
    Todo.findByIdAndUpdate(req.params.id,{$set:todoModel},{new:true},(err,data)=>{
        if (!err) {
            res.status(200).json({
                code: 200, message: 'Updated Todo',
                updateTodo: data
            })
        } else {
            console.log(err);
        }
    })
})

//delete request
router.route('/MyTodoApp/deleteTodo/:id').delete(function(req, res) {
    Todo.remove({
        _id: req.params.id
    }, function(err, todo) {
        if (err)
            res.send(err);

        res.json({ message: 'Successfully deleted' });
    });
});


module.exports = router
