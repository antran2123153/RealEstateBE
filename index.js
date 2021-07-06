var createError = require("http-errors");
var express = require("express");
var logger = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
const connectToDatabase = require("./config/db");
const route = require("./routes");
const PORT = process.env.PORT || 3000;

var app = express();

dotenv.config({ path: "./config/config.env" });

connectToDatabase();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

route(app);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

module.exports = app;
