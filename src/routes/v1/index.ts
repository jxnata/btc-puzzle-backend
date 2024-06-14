import { Router } from "express";
import users from "./users";
import pools from "./pools";
import auth from "./auth";

const router = Router();

router.use("/pools", pools);
// router.use("/puzzles", puzzles);
router.use("/users", users);
router.use("/auth", auth);

export default router;
