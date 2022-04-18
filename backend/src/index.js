require('dotenv').config();
import express from "express";
import config from "./server/config";
import "./database";

const app = config(express());

async function main() {
  await app.listen(app.get('port'));
  console.log(`Connected on port: http://localhost:${app.get("port")}/`);
}

main();