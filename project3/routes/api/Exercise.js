const router = require("express").Router();
const exerciseController = require("../../controller/exerciseController");

// Matches with "/api/books"
router.route("/")
  .get(exerciseController.findAll)
  .post(exerciseController.create);
  //console.log("posting");

// Matches with "/api/books/:id"
router.route("/:id")
  .get(exerciseController.findById)
  .put(exerciseController.update)
  .delete(exerciseController.remove);

module.exports = router;