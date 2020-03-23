const router = require("express").Router();
const UserRoutes = require("./User");
const MasterRoutes = require("./Master");
const programRoutes = require("./programs");
const exerciseRoutes = require("./Exercise");

//  routes
router.use("/user", UserRoutes);
router.use("/master", MasterRoutes);
router.use("/programs", programRoutes);
router.use("/Exercise", exerciseRoutes);


module.exports = router;
