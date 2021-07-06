const Project = require("../models/Project");

exports.getAll = async (req, res) => {
  Project.find()
    .exec()
    .then((projects) =>
      res.json({
        projects: projects,
      })
    )
    .catch((err) => res.send(err.message));
};

exports.add = async (req, res) => {
  let newproject = new Project(req.body);
  newproject
    .save()
    .then((project) =>
      res.json({
        project: project,
      })
    )
    .catch((err) => res.send(err.message));
};

exports.update = async (req, res) => {
  const data = {
    name: req.body.name,
    mainImg: req.body.mainImg,
    date: req.body.date,
    price: req.body.price,
    maps: req.body.maps,
    video: req.body.video,
    area: req.body.area,
    address: req.body.address,
    introImg: req.body.introImg,
    descriptions: req.body.descriptions,
    location: req.body.location,
    utilities: req.body.utilities,
    ground: req.body.ground,
    policy: req.body.policy,
    descriptionsImg: req.body.descriptionsImg,
    locationImg: req.body.locationImg,
    utilitiesImg: req.body.utilitiesImg,
    groundImg: req.body.groundImg,
    policyImg: req.body.policyImg,
    state: req.body.state,
  };

  Project.findByIdAndUpdate(req.body.id, data, { new: true })
    .exec()
    .then((project) => res.status(200).json({ project: project }))
    .catch((err) => res.status(500).json({ error: err }));
};

exports.delete = async (req, res) => {
  Project.findByIdAndRemove(req.body.id)
    .exec()
    .then(() => res.status(200).send("Successfull"))
    .catch((err) => res.status(500).json({ error: err }));
};