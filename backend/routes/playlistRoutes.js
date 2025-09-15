import express from "express";
const router = express.Router();

import {authMiddleware} from "../middleware/authMiddleware.js";

import { createPlaylistRequest } from "../controller/playlistController.js";

router.post("/",authMiddleware,createPlaylistRequest);


export default router;