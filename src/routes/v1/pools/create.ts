import { Router } from "express";
import admin from "../../../middleware/admin";
import Pools from "../../../models/pools";
import IPool from "../../../models/pools/types";

const router = Router();

router.post("/", admin, async (req, res) => {
	try {
		const pool = await new Pools<IPool>({ ...req.body }).save();

		return res.status(201).json({ pool: pool._id });
	} catch (error) {
		return res.status(500).json({ message: "failed to create pool due to server error." });
	}
});

export default router;
