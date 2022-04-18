import express from "express";

const app = express();
app.set("port", 5000);

async function main() {
  await app.listen(app.get("port"));
  console.log(`Connected on port: http://localhost:${app.get("port")}/`);

  app.get("/", (req, res) => {
    console.log("Hello world");
    // res.json({
    //   message: "Mi primer servidor con express",
    // });
  });
}

main();
