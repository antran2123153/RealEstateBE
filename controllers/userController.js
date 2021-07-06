const User = require("../models/User");

exports.get = async (req, res) => {
  User.find()
    .exec()
    .then((users) =>
      res.json({
        users: users,
      })
    )
    .catch((err) => res.send(err.message));
};

exports.add = async (req, res) => {
  let newuser = new User(req.body);
  newuser
    .save()
    .then((user) =>
      res.json({
        user: user,
      })
    )
    .catch((err) => res.send(err.message));
};

exports.delete = async (req, res) => {
  User.findByIdAndRemove(req.body.id)
    .exec()
    .then(() => res.status(200).send("Successfull"))
    .catch((err) => res.status(500).json({ error: err }));
};
