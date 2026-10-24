const express = require("express");
const configDb = require("./utils/dbConfig");
let port = process.env.PORT || 4000;
require("dotenv").config();
const app = express();
const productSchema = require("./router/productRoute");
app.use(express.json());
app.get("/no-sql", (req, res) => {
  res.send("server working correctly");
});

app.use("/", productSchema);
app.listen(port, () => {
  configDb();
  console.log("server connected");
});
