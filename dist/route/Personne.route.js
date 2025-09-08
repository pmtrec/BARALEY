import { Router } from "express";
import { CreatePersonne, getAll } from '../controller/personne.controller.js';
const router = Router();
router.get("/", getAll);
router.post("/", CreatePersonne);
export default router;
//# sourceMappingURL=Personne.route.js.map