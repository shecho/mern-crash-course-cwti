import mongoose from "mongoose";

const URI = process.env.MONGOOSE_URI || "mongodb://localhost/merndatabase";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("Database is connected");
});

// Ejemplo para BD cloud
// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://oigres:<password>@cluster0.hd3cs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// client.connect((err) => {
//   const collection = client.db("merndatabase").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
