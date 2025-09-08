import type {Request,Response} from "express";
import {PersonneService} from '../service/personne.service.js';
import {PersonneChema} from '../validators/validateChema.js';


const PersonneServ = new PersonneService();

export async function getAll(req:Request,res:Response){
    const personnes = await PersonneServ.findAll();
    res.status(200).json(personnes);
}

export async function CreatePersonne(req:Request,res:Response){
    const resultat = PersonneChema.safeParse(req.body);
    if (!resultat.success) {
        return res.status(400).json({
            message:"Données invalide",
            error:resultat.error.format()
        });
    }
    const Create = await PersonneServ.create(resultat.data)
    res.status(201).json(Create);
}

export async function UpdatePersonne(req:Request<{id:string}>,res:Response){
    const IdParams = req.params.id;
    if(!IdParams) return res.status(400).json({
        message:"Id est  requis"
    });
      
    const id =parseInt(IdParams);

     if (Number.isNaN(id)) return res.status(400).json({message:"Id doit être un nombre"});

    const personne = await PersonneServ.update(id,req.body);
    if(!personne) return res.status(404).json({message:"Personne non trouvé"});
    res.status(200).json(personne);
}

export async function DeletePersonne(req:Request<{id:string}>,res:Response){
    const IdParams = req.params.id;
    if(!IdParams) return res.status(400).json({
        message:"Id est  requis"
    });
      
        const id =parseInt(IdParams);

        if (Number.isNaN(id)) return res.status(400).json({message:"Id doit être un nombre"});

}

export async function findByIdPersonne (req:Request<{id:string}>,res:Response){
    const IdParams = req.params.id;
    if(!IdParams) return res.status(400).json({
        message:"Id est  requis"
    });
      const id =parseInt(IdParams);

     if (Number.isNaN(id)) return res.status(400).json({message:"Id doit être un nombre"});
}