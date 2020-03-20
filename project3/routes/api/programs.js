const router = require("express").Router();
const programController = require("../../controllers/programController");

// Matches with "/api/books"
router.route("/")
  // .get(programController.findAll)
  .post(programController.create);
  //console.log("posting");

// Matches with "/api/books/:id"
router.route("/:id")
  .get(programController.findById)
  .put(programController.update)
  .delete(programController.remove);

module.exports = router;