const Local = require("../models/Local");

exports.update = async (req, res) => {
  const local = req.body;
  const data = {
    logo: local.logo,
    name: local.name,
    facebook: local.facebook,
    youtube: local.youtube,
    twiter: local.twiter,
    gmail: local.gmail,
    address: local.address,
    phonenumber: local.phonenumber,
    description: local.description,
    rightSideImg: local.rightSideImg,
  };

  Local.findByIdAndUpdate(local.id, data, { new: true })
    .exec()
    .then((local) => res.status(200).json({ local: local }))
    .catch((err) => res.status(500).json({ error: err }));
};

exports.get = async (req, res) => {
  Local.find()
    .exec()
    .then((data) => res.json(data[0]))
    .catch((error) => res.send(error.message));
};
