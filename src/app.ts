import express  from "express";
import personneRoutes from "./route/Personne.route.js";


const app = express();
app.use(express.json());


app.use('/api/personne',personneRoutes);

export default app