import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../constants";
import Users from "../models/users";
import IUser from "../models/users/types";

const client = (req: Request, res: Response, next: NextFunction) => {
	try {
		const authHeader = req.header("authorization");

		if (!authHeader) {
			return res.status(401).json({ message: "authorization header missing." });
		}

		const tokenParts = authHeader.split(" ");

		if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
			return res.status(401).json({ message: "invalid authorization header." });
		}

		const token = tokenParts[1];

		jwt.verify(token, SECRET_KEY, async (err, callback) => {
			if (err) {
				return res.status(403).json({ message: "invalid authentication token." });
			}

			if (typeof callback !== "string") {
				const user_id = callback?.user?._id as IUser;
				const user = await Users.findById(user_id);

				if (!user) return res.status(404).json({ message: "user requested not found." });

				(req as Request & { user?: IUser }).user = user;
			}

			next();
		});
	} catch (error) {
		return res.status(500).json({ error: "server error", data: error });
	}
};

export default client;
