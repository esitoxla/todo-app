//helps you write todo to the data base
import { TodoModel } from "../models/todo.js";
import { addtodovalidator, updatetodovalidator } from "../validators/todo.js";

export const addTodo = async (req, res, next) => {
  try {
    //put logical steps here
    //validate user input
    const { error, value } = addtodovalidator.validate(req.body);
    if (error) {
      return res.status(422).json(error);
    }
    const todo = new TodoModel({
      ...value,
      user: req.auth.id,
    });
    //save todo to database
    await todo.save();
    //respond to request
    res.status(201).json("todo added successfully!");
  } catch (error) {
    next(error);
  }
};

export const getTodo = async (req, res, next) => {
  try {
    const { filter = "{}", sort = "{}", limit = 10, skip = 0 } = req.query;
    //fetch todos from database
    const todos = await TodoModel.find(JSON.parse(filter))
      .sort(JSON.parse(sort))
      .limit(limit)
      .skip(skip);
    //return response
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const countTodos = async (req, res, next) => {
  try {
    const { filter = "{}" } = req.query;
    //count todos in database
    const count = await TodoModel.countDocuments(JSON.parse(filter));
    //respond to request
    res.status(200).json({ count });
  } catch (error) {
    next(error);
  }
};

export const getTodoById = async (req, res, next) => {
  try {
    const todo = await TodoModel.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "todo not found" });
    }
    res.status(200).json(todo);
  } catch (error) {
    next(error);
  }
};

export const searchTodo = (req, res, next) => {
  const { title } = req.query;
  const query = {};
  if (title) query.title = { $regex: title, $options: "i" };
};

export const updateTodo = async (req, res, next) => {
  try {
    const { error, value } = updatetodovalidator.validate(req.body);
    if (error) {
      return res.status(422).json({ error: error.details });
    }
    const updatedTodo = await TodoModel.findByIdAndUpdate(
      {
        _id: req.params.id,
        user: req.auth.id,
      },
      req.body,
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({message: "todo not found"});
    }
    res.status(200).json("Todo updated successfully!");
  } catch (error) {
    next(error);
  }
};

export const deleteTodo = async (req, res, next) => {
  try {
    const deleteTodo = await TodoModel.findById(req.params.id);
    if(!deleteTodo) {
      return res.status(404).json({message: "todo not found"});
    }
    await TodoModel.findByIdAndDelete(req.params.id);
    res.status(200).json("Todo deleted!");
  } catch (error) {
    next (error)
  }
};
//in controllers we do named exports
