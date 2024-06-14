import { Router } from "express";
import admin from "../../../middleware/admin";
import Pools from "../../../models/pools";

const router = Router();

router.put("/:id", admin, async (req, res) => {
	try {
		const pool = await Pools.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });

		if (!pool) return res.status(404).json({ message: "pool not found." });

		return res.status(200).json({ pool: pool._id });
	} catch (error) {
		return res.status(500).json({ message: "error occurred while updating the pool." });
	}
});

export default router;
