import { Router } from "express";
import admin from "../../../middleware/admin";
import Puzzles from "../../../models/puzzles";
import IPuzzle from "../../../models/puzzles/types";

const router = Router();

router.post("/", admin, async (req, res) => {
	try {
		const puzzle = await new Puzzles<IPuzzle>({ ...req.body }).save();

		return res.status(201).json({ puzzle: puzzle._id });
	} catch (error) {
		return res.status(500).json({ message: "failed to create puzzle due to server error." });
	}
});

export default router;
