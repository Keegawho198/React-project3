const router = require("express").Router();
const UserRoutes = require("./User");
const MasterRoutes = require("./Master");
// Book routes
router.use("/user", UserRoutes);
router.use("/master", MasterRoutes);

module.exports = router;
