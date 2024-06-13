import { Router } from "express";
import admin from "../../../middleware/admin";
import Users from "../../../models/users";

const router = Router();

router.put("/:id", admin, async (req, res) => {
	try {
		const user = await Users.findByIdAndUpdate(req.params.id, { ...req.body, role: 'user' }, { new: true });

		if (!user) return res.status(404).json({ message: "user not found." });

		return res.status(200).json({ user: user._id });
	} catch (error) {
		return res.status(500).json({ message: "error occurred while updating the user." });
	}
});

export default router;
