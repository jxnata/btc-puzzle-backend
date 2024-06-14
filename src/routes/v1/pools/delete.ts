import { Router } from "express";
import admin from "../../../middleware/admin";
import Pools from "../../../models/pools";

const router = Router();

router.delete("/:id", admin, async (req, res) => {
	try {
		const pool = await Pools.findByIdAndDelete(req.params.id);

		if (!pool) return res.status(404).json({ message: "pool not found." });

		return res.json({ message: "pool deleted successfully" });
	} catch (error) {
		return res.status(500).json({ message: "error occurred while deleting the pool." });
	}
});

export default router;
