import { Router } from "express";
import admin from "../../../middleware/admin";
import Users from "../../../models/users";

const router = Router();

router.delete("/:id", admin, async (req, res) => {
	try {
		const user = await Users.findByIdAndDelete(req.params.id);

		if (!user) return res.status(404).json({ message: "user not found." });

		return res.json({ message: "user deleted successfully" });
	} catch (error) {
		return res.status(500).json({ message: "error to delete user." });
	}
});

export default router;
