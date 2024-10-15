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
    const { filter = "{}", limit = 10, skip = 0 } = req.query;
    //fetch todos from database
    const todos = await TodoModel.find(JSON.parse(filter))
      .limit(limit)
      .skip(skip);
    //return response
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const updateTodo = (req, res, next) => {
  res.json("Todo updateed!");
};

export const deleteTodo = (req, res, next) => {
  res.json("Todo deleted!");
};
//in controllers we do named exports
