import { PersonneService } from '../service/personne.service.js';
const PersonneServ = new PersonneService();
export async function getAll(req, res) {
    const personnes = await PersonneServ.findAll();
    res.status(200).json(personnes);
}
//# sourceMappingURL=personne.controller.js.map