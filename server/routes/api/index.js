const router = require("express").Router();
const bookRoutes = require("./books-routes");
const authRoutes = require("./auth-routes");
const profileRoutes = require("./profile-routes");

console.log('router')

// Book routes
router.use("/books", bookRoutes);
router.use("/auth", authRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
