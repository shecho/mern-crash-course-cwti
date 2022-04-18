import { Schema, model } from "mongoose";
const scheduleSchema = new Schema(
  {
    title: String,
    date: Date,
    taskList: [],
  },
  {
    timestamps: true,
  }
);
export default model("Schedule", scheduleSchema);
