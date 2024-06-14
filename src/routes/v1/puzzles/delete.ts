import { Router } from "express";
import admin from "../../../middleware/admin";
import Puzzles from "../../../models/puzzles";

const router = Router();

router.delete("/:id", admin, async (req, res) => {
	try {
		const puzzle = await Puzzles.findByIdAndDelete(req.params.id);

		if (!puzzle) return res.status(404).json({ message: "puzzle not found." });

		return res.json({ message: "puzzle deleted successfully" });
	} catch (error) {
		return res.status(500).json({ message: "error occurred while deleting the puzzle." });
	}
});

export default router;
