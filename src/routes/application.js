import express from "express";
import initiateApplication from "../controllers/application.js";

const router = express.Router();

router.get("/initiate-application", initiateApplication);

export default router;
