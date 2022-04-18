import { Router } from "express";
import Home from "../controllers/homeController";
import Task from "../controllers/taskController";
import Todo from "../controllers/todoController";
const router = Router();

module.exports = (app) => {
  app.get("/", Home.wellcome);

  // TODOs Routes
  app.get("/todo", Todo.list);
  app.post("/todo", Todo.create);
  app.put("/todo", Todo.update);
  app.delete("/todo", Todo.delete);
  // Task Routes
  app.get("/task", Task.list);
  app.post("/task", Task.create);
  app.put("/task", Task.update);
  app.delete("/task", Task.delete);
  // Schdeule Routes
  app.use(router);
};
