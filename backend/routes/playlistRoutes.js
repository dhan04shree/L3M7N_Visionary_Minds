import express from "express";
const router = express.Router();

import {authMiddleware} from "../middleware/authMiddleware.js";
// import { showController } from "../controller/showController.js";
// import { playlistController } from "../controller/playlistController.js";
// import { showOneEntry } from "../controller/showOneEntry.js";
// import { transcribeEntry, analyzeAudio } from "../controller/transcribeEntry.js";
import { createPlaylistRequest } from "../controller/playlistController.js";

// router.post('/:id/entry', transcribeEntry);
// router.post('/:id/analysis', analyzeAudio);

router.post("/",createPlaylistRequest);
// router.post('/',authMiddleware,playlistController);

// router.get('/showentry',authMiddleware,showController)

// router.get('/:id', showOneEntry);

export default router;