import { Router } from "express";
import Puzzles from "../../../models/puzzles";
import client from "../../../middleware/client";

const router = Router();

router.get("/", client, async (req, res) => {
	try {
		const { skip = 0, limit = 10 } = req.query;

		const puzzles = await Puzzles.find().skip(Number(skip)).limit(Number(limit));

		return res.json({ puzzles, skip, limit });
	} catch (error) {
		return res.status(400).json({ message: "failed to retrieve puzzle list due to server error." });
	}
});

export default router;
