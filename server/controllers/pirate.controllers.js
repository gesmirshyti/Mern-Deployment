const Pirate = require("../models/pirate.model");


module.exports.createPirate = (request, response) => {
    Pirate.create(request.body)
    .then((pirate) => response.json(pirate))
    .catch(err => response.status(300).json(err));
};

module.exports.getAllPirates = (request, response) => {
    Pirate.find({})
    .then((pirate) => {
        console.log(pirate);
        response.json(pirate);
    })
    .catch((err) => {
        console.log(err);
        response.json(err);
    });
};

module.exports.getPirate = (request, response) => {
    Pirate.findOne({ _id: request.params.id })
      .then((pirate) => response.json(pirate))
      .catch((err) => response.json(err));
  };


  module.exports.deletePirate = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
  }

  module.exports.updatePirate = (request, response) => {
    console.log("Feedback from React")
    console.log(request.body)
    Pirate.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updated => response.json(updated))
        .catch(err => response.json(err))
}