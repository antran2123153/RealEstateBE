const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const admin = await Admin.findOne({ username: req.body.username });
  if (!admin) return res.status(400).send("Username is not found");
  const validPass = await bcrypt.compare(req.body.password, admin.password);
  if (!validPass) return res.status(400).send("Invalid password");
  const token = jwt.sign({ id: admin._id }, process.env.TOKEN_SECRET);
  res.status(200).send(token);
};

exports.add = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const account = new Admin({
      username: req.body.username,
      password: hashPassword,
      fullname: req.body.fullname,
    });
    let model = new Admin(account);
    model
      .save()
      .then((account) =>
        res.json({
          account: account,
        })
      )
      .catch((err) =>
        res.send("Error while saving to database: " + err.message)
      );
  } catch (err) {
    res.send("Error has happened: " + err.message);
  }
};
