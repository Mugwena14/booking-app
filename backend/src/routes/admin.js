const express = require("express");
const router = express.Router();
const { registerAdmin, loginAdmin } = require("../controllers/adminController");

// One-time setup for the first admin
router.post("/setup", registerAdmin);

// Login existing admin
router.post("/login", loginAdmin);

module.exports = router;
