import { Router } from "express";
import create from "./create";
import remove from "./delete";
import list from "./list";
import update from "./update";
import view from "./view";

const router = Router();

router.use(view);
router.use(create);
router.use(list);
router.use(update);
router.use(remove);

export default router;
