import { Schema, model } from "mongoose";
const taskSchema = new Schema(
  {
    nombre: String,
    descripcion: String,
    date: String,
  },
  {
    timestamps: true,
  }
);
export default model("Task", taskSchema);
