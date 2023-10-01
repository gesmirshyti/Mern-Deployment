const PirateController = require("../controllers/pirate.controllers");

module.exports = (app) => {
  app.post("/pirates/new", PirateController.createPirate);
  app.get("/pirates", PirateController.getAllPirates);
  app.get("/pirates/:id", PirateController.getPirate);
  app.patch("/pirates/:id", PirateController.updatePirate);
  app.delete("/pirates/:id", PirateController.deletePirate);  

};
