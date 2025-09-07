import  {PersonneRepository,type PersonneCreate, type PersonneUpdate} from '../repository/personne.Repository.js';


const personneRepo =new PersonneRepository();

export class PersonneService {
    async findAll(){
        return await personneRepo.findAll();
    }

    async findById(id:number){
        return await personneRepo.findById(id);
    }
    
    async create(personne:PersonneCreate){
        return await personneRepo.create(personne);
    }

    async update(id:number,personne:PersonneUpdate){
        return await personneRepo.update(id,personne);
    }

    async delete(id:number){
        return await personneRepo.delete(id);
    }
}
