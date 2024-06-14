import { Router } from "express";
import Pools from "../../../models/pools";
import client from "../../../middleware/client";

const router = Router();

router.get("/", client, async (req, res) => {
	try {
		const { skip = 0, limit = 10 } = req.query;

		const pools = await Pools.find().skip(Number(skip)).limit(Number(limit)).populate("puzzle");

		return res.json({ pools, skip, limit });
	} catch (error) {
		return res.status(400).json({ message: "failed to retrieve pool list due to server error." });
	}
});

export default router;
