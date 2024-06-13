import { Router } from "express";
import admin from "../../../middleware/admin";
import Users from "../../../models/users";

const router = Router();

router.get("/view/:id", admin, async (req, res) => {
	try {
		const user = await Users.findById(req.params.id)

		if (!user) {
			return res.status(404).json({ message: "user not found." });
		}

		return res.json({ user });
	} catch (error) {
		return res.status(400).json({ message: "an error occurred while fetching the user." });
	}
});

export default router;
