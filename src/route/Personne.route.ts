import { Router } from "express";
import {getAll} from '../controller/personne.controller.js';

const router =  Router();

router.get("/",getAll);

export default router;

