//helps you write todo to the data base
import { TodoModel } from "../models/todo.js";

export const addTodo = async (req, res, next) => {
 try {
     //put logical steps here
       //validate user input
       //write todo to database
       await TodoModel.create(req.body);
       //respond to request
       res.status(201).json('Todo was added!');
    } catch (error) {
        next(error); 
    }
}

export const getTodo = async(req, res, next) =>{
    try {
        //fetch todos from database
        const todos = await TodoModel.find();
        //return response
        res.status(200).json(todos);
    
    } catch (error) {
        next(error);   
    }
}

export const updateTodo = (req,res,next) =>{
    res.json('Todo updateed!');
}

export const deleteTodo = (req, res, next) =>{
    res.json('Todo deleted!');
}
//in controllers we do named exports    