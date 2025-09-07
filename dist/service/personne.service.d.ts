import { type PersonneCreate, type PersonneUpdate } from '../repository/personne.Repository.js';
export declare class PersonneService {
    findAll(): Promise<import("../repository/personne.Repository.js").Personne[]>;
    findById(id: number): Promise<import("../repository/personne.Repository.js").Personne | null>;
    create(personne: PersonneCreate): Promise<import("../repository/personne.Repository.js").Personne>;
    update(id: number, personne: PersonneUpdate): Promise<import("../repository/personne.Repository.js").Personne>;
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=personne.service.d.ts.map