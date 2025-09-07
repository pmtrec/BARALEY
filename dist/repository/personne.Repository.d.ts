import type { ICrud } from "../interface/index.js";
export interface Personne {
    id: number;
    nom: string;
    prenom: string;
    age: number;
}
export type PersonneCreate = {
    nom: string;
    prenom: string;
    age: number;
};
export type PersonneUpdate = Partial<PersonneCreate>;
export declare class PersonneRepository implements ICrud<Personne, PersonneCreate, PersonneUpdate, number> {
    findAll(): Promise<Personne[]>;
    findById(id: number): Promise<Personne | null>;
    create(personne: PersonneCreate): Promise<Personne>;
    update(id: number, personne: PersonneUpdate): Promise<Personne>;
    delete(id: number): Promise<void>;
}
//# sourceMappingURL=personne.Repository.d.ts.map