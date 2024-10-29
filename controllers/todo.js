//helps you write todo to the data base
import { TodoModel } from "../models/todo.js";
import { addtodovalidator, updatetodovalidator } from "../validators/todo.js";

export const addTodo = async (req, res, next) => {
  try {
    //put logical steps here
    //validate user input
    const { error, value } = addtodovalidator.validate({
      ...req.body,
      icon: req.file?.filename,
    });
    if (error) {
      return res.status(422).json(error);
    }
    //write todo to database
    await TodoModel.create(value);
    //respond to request
    res.status(201).json("todo was added");
  } catch (error) {
    next(error);
  }
};

export const getTodo = async (req, res, next) => {
  try {
    const { filter = "{}", sort='{}', limit = 10, skip = 0 } = req.query;
    //fetch todos from database
    const todos = await TodoModel
      .find(JSON.parse(filter))
      .sort(JSON.parse(sort))
      .limit(limit)
      .skip(skip);
    //return response
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const countTodos = async (req, res, next)=> {
 try {
   const {filter = "{}"} = req.query
   //count todos in database
   const count = await TodoModel.countDocuments(JSON.parse(filter))
   //respond to request
   res.status(200).json({count})
 } catch (error) {
    next(error)
 }
}

export const getTodoById = async (req, res, next) =>{
  const {} = req.params;
  //get todo by id from the database
  const Todo = await TodoModel.findById(id);
  res.json(Todo)
}

export const searchTodo = (req, res, next) =>{
  const {title} = req.query;
  const query = {};
  if (title)query.title = {$regex:title, $options:"i"}
}

export const updateTodo = (req, res, next) => {
  res.json("Todo updateed!");
};

export const deleteTodo = (req, res, next) => {
  res.json("Todo deleted!");
};
//in controllers we do named exports
