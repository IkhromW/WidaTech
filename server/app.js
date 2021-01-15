const express = require("express");
const app = express();
const PORT = 3100;
const cors = require("cors");
const routers = require("./routers");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routers);

app.listen(PORT, () => {
  console.log("server is running ...");
});
