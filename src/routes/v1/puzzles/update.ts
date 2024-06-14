import { Router } from "express";
import admin from "../../../middleware/admin";
import Puzzles from "../../../models/puzzles";

const router = Router();

router.put("/:id", admin, async (req, res) => {
	try {
		const puzzle = await Puzzles.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });

		if (!puzzle) return res.status(404).json({ message: "puzzle not found." });

		return res.status(200).json({ puzzle: puzzle._id });
	} catch (error) {
		return res.status(500).json({ message: "error occurred while updating the puzzle." });
	}
});

export default router;
