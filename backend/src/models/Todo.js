import { Schema, model } from "mongoose";
const todoSchema = new Schema(
  {
    // fechaSolicitud: String,
    // fechaFechaStimada: String,
    cliente: String,
    tarea: String,
    observaciones: String,
    prioridad: String,
    stado: String,
    tiempo: Number,
    responsible: String,
  },
  {
    timestamps: true,
  }
);
export default model("Todo", todoSchema);
