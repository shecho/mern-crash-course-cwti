import express, { json } from "express";
// import path from "path";
import morgan from "morgan";
import routes from "../routes";
import cors from "cors";
// const routes = require("../routes/index");

const config = (app) => {
  // Configuration
  app.use(cors());
  app.set("port", process.env.PORT || 4000);
  app.use(json());
  app.use(morgan("dev"));

  // Static files when you use SSR

  // Routes from /routes index
  routes(app);
  return app;

  // Error router
};
export default config;
