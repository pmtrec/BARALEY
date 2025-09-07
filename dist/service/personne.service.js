import { PersonneRepository } from '../repository/personne.Repository.js';
const personneRepo = new PersonneRepository();
export class PersonneService {
    async findAll() {
        return await personneRepo.findAll();
    }
    async findById(id) {
        return await personneRepo.findById(id);
    }
    async create(personne) {
        return await personneRepo.create(personne);
    }
    async update(id, personne) {
        return await personneRepo.update(id, personne);
    }
    async delete(id) {
        return await personneRepo.delete(id);
    }
}
//# sourceMappingURL=personne.service.js.map