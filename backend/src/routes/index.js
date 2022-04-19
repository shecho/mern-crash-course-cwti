import { Router } from "express";
import Home from "../controllers/homeController";
import Task from "../controllers/taskController";
import Todo from "../controllers/todoController";
const router = Router();

module.exports = (app) => {
  app.get("/", Home.wellcome);
  app.get("/home", Home.wellcome);

  // TODOs Routes
  app.get("/todos", Todo.list);
  app.post("/todos", Todo.create);
  app.put("/todos/:id", Todo.update);
  app.delete("/todos/:id", Todo.delete);

  // Task Routes
  app.get("/task", Task.list);
  app.post("/task", Task.create);
  app.put("/task", Task.update);
  app.delete("/task", Task.delete);
  // Schdeule Routes
  app.use(router);
};
