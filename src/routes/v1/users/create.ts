import { Router } from "express";
import admin from "../../../middleware/admin";
import Users from "../../../models/users";
import IUser from "../../../models/users/types";

const router = Router();

router.post("/", admin, async (req, res) => {
	try {
		const user = await new Users<IUser>({ ...req.body, role: "user" }).save();

		return res.status(201).json({ user: user._id });
	} catch (error) {
		return res.status(500).json({ message: "failed to create user due to server error." });
	}
});

export default router;
