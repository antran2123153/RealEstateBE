const adminRouter = require("./admin");
const projectRouter = require("./project");
const localRouter = require("./local");
const userRouter = require("./user");

function route(app) {
  app.use("/api/admin", adminRouter);
  app.use("/api/project", projectRouter);
  app.use("/api/local", localRouter);
  app.use("/api/user", userRouter);
}

module.exports = route;
