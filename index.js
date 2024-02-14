require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
require("./db/conn");
const router = require("./routes/book");

app.use("/", router);

app.use(express.json());

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
