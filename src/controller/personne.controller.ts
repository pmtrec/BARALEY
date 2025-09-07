import type {Request,Response} from "express";
import {PersonneService} from '../service/personne.service.js';



const PersonneServ = new PersonneService();

export async function getAll(req:Request,res:Response){
    const personnes = await PersonneServ.findAll();
    res.status(200).json(personnes);
}
