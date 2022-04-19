import express from "express";

const app = express();

app.set("port", 5000);

async function main() {
  app.listen(app.get("port"));
  console.log(`Connected on port: http://localhost:${app.get("port")}/`);

  app.get("/", (req, res) => {
    res.json({
      message: "Mi primer servidor con express",
      message2: "Mi primer servidor con express2",
    });
  });

  app.get("/users", (req, res) => {
    res.json({
      user1: "Willy",
      user2: "Wilder",
    });
  });
}

main();
