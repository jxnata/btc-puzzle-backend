import { Router } from "express";
import admin from "../../../middleware/admin";
import Users from "../../../models/users";

const router = Router();

router.get("/", admin, async (req, res) => {
	try {
		const { skip = 0, limit = 10 } = req.query;

		const users = await Users.find().skip(Number(skip)).limit(Number(limit));

		return res.json({ users, skip, limit });
	} catch (error) {
		return res.status(400).json({ message: "an error occurred while listing users." });
	}
});

export default router;
