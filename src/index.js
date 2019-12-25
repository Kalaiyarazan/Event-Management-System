const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();
const indexRouter = require("./routes/indexRouter");
const createRouter = require("./routes/createRouter");
const searchRouter = require("./routes/searchRouter");

const app = express();

const PORT = process.env.PORT || 5000;

app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use("/", indexRouter);
app.use("/create", createRouter);
app.use("/search", searchRouter);

app.listen(PORT, () => {
  console.log(`Server Started and Running on Port : ${PORT}`);
});
