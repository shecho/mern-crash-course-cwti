import Task from "../models/Task";

const ctrl = {};
ctrl.list = async (req, res) => {
  const task = await Task.find();
  res.json({
    message: "Listar todos",
    task,
  });
};
ctrl.create = async (req, res) => {
  const { nombre, descripcion, date } = req.body;
  const newTask = new Task({
    nombre,
    descripcion,
    date,
  });
  await newTask.save();
  res.json({
    message: "crear",
    newTask,
  });
};
ctrl.update = async (req, res) => {
  res.json({
    message: "Actualizar ",
  });
};
ctrl.delete = async (req, res) => {
  res.json({
    message: "eliminar ",
  });
};

export default ctrl;
