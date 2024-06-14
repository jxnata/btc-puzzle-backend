import { Router } from "express";
import Pools from "../../../models/pools";
import client from "../../../middleware/client";

const router = Router();

router.get("/view/:id", client, async (req, res) => {
	try {
		const pool = await Pools.findById(req.params.id);

		if (!pool) {
			return res.status(404).json({ message: "pool not found." });
		}

		return res.json({ pool });
	} catch (error) {
		return res.status(400).json({ message: "an error occurred while fetching the pool." });
	}
});

export default router;
