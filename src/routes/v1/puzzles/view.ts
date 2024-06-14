import { Router } from "express";
import Puzzles from "../../../models/puzzles";
import client from "../../../middleware/client";

const router = Router();

router.get("/:id", client, async (req, res) => {
	try {
		const puzzle = await Puzzles.findById(req.params.id);

		if (!puzzle) {
			return res.status(404).json({ message: "puzzle not found." });
		}

		return res.json({ puzzle });
	} catch (error) {
		return res.status(400).json({ message: "an error occurred while fetching the puzzle." });
	}
});

export default router;
