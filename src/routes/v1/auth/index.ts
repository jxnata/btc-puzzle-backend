import { Router } from "express";
import login from "./login";

const router = Router();

router.use(login);

export default router;
