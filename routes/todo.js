import { Router } from "express";
import {
  addTodo,
  deleteTodo,
  getTodo,
  updateTodo,
} from "../controllers/todo.js";
import { localUpload, remoteUpload } from "../controllers/middlewares/upload.js";

//create a router
const todoRouter = Router();

//define routes
todoRouter.post("/todos", remoteUpload.single("icon"), addTodo);

todoRouter.get("/todos", getTodo);

todoRouter.patch("/todos/:id", updateTodo);

todoRouter.delete("/todos/:id", deleteTodo);

//export router
export default todoRouter;
