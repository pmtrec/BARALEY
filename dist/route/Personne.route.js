import { Router } from "express";
import { getAll } from '../controller/personne.controller.js';
const router = Router();
router.get("/", getAll);
export default router;
//# sourceMappingURL=Personne.route.js.map