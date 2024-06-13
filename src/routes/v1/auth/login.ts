import { Router } from "express";
import jwt from "jsonwebtoken";
import { DEFAULT_MESSAGE, SECRET_KEY } from "../../../constants";
import Users from "../../../models/users";
import verifySignature from "../../../helpers/verify-signature";

const router = Router();

router.post("/", async (req, res) => {
	try {
		const { username, signature } = req.body;

		const user = await Users.findOne({ username })

		if (!user) {
			return res.status(400).json({ message: "user not found." });
		}

		const is_valid = verifySignature(user.address, signature, DEFAULT_MESSAGE);

		if (!is_valid) return res.status(400).json({ message: "invalid signature." });

		const token = jwt.sign({ user }, SECRET_KEY, { expiresIn: "1d" });

		return res.json({ user, token });
	} catch (error) {
		return res.status(500).json({ message: "error to authenticate user" });
	}
});

export default router;
