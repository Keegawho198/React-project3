const router = require("express").Router();
const UserRoutes = require("./User");
const MasterRoutes = require("./Master");
const programRoutes = require("./programs");

//  routes
router.use("/user", UserRoutes);
router.use("/master", MasterRoutes);
router.use("/programs", programRoutes);


module.exports = router;
