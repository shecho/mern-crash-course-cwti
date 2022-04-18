import Todo from "../models/Todo";

const ctrl = {};
ctrl.list = async (req, res) => {
  const todos = await Todo.find();
  res.json({
    message: "Listar todos los TODOS",
    todos,
  });
};
ctrl.create = async (req, res) => {
  const {
    observaciones,
    prioridad,
    cliente,
    tarea,
    stado,
    tiempo,
    responsable,
  } = req.body;
  const newTodo = new Todo({
    observaciones,
    prioridad,
    cliente,
    tarea,
    stado,
    tiempo,
    responsable,
  });
  await newTodo.save();
  res.json({
    message: "Tarea Creada",
    newTodo,
  });
};
ctrl.update = async (req, res) => {
  res.json({
    message: "Tarea Actualizada",
  });
};
ctrl.delete = async (req, res) => {
  res.json({
    message: "tarea Eliminada",
  });
};

export default ctrl;
