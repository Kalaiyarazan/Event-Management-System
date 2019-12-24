const express = require("express");
require("dotenv").config();
const indexRouter = require("./src/routes/indexRouter");

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server Started and Running on Port : ${PORT}`);
});
