import { PrismaClient } from "@prisma/client";
import type {ICrud} from "../interface/index.js"

const prisma = new PrismaClient();
//  T bi mo nekk ni 
export interface personne {
    id:number
    nom:string
    prenom:string
    age :number
}
// Tcreate Bi mo nekk ni
export type personneCreate={
    nom:string
    prenom:string
    age :number
}
// On pourrait utiliser Omit 

//  Tupdate Bi da dieul personneCreate mou def attribut yi optionel a cause de Partial
export type personneUpdate=Partial<personneCreate>;


export class PersonneRepository implements ICrud <personne,personneCreate,personneUpdate,number>{
    async findAll():Promise<personne[]>{
        return await prisma.personne.findMany();
    }

    async findById(id:number):Promise <personne | null>{
        return await prisma.personne.findUnique(
            {
                where : {id}
            }
        );
    }

    async create(personne:personneCreate):Promise<personne>{
        return await prisma.personne.create({
            data:personne
        });
    }
    
   async  update(id:number,personne:personneUpdate):Promise<personne>{
     return await prisma.personne.update({
        where :{id},
        data :personne
     })
   }
    async delete(id:number):Promise<void>{
        await prisma.personne.delete({
            where : {id}
        });
    }

}
