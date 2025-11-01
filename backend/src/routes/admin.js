import express from "express";
const router = express.Router();
import { registerAdmin, loginAdmin } from "../controllers/adminController.js";

// One-time setup for the first admin
router.post("/setup", registerAdmin);

// Login existing admin
router.post("/login", loginAdmin);

export default router;
