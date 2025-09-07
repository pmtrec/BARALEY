import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export class PersonneRepository {
    async findAll() {
        return await prisma.personne.findMany();
    }
    async findById(id) {
        return await prisma.personne.findUnique({
            where: { id }
        });
    }
    async create(personne) {
        return await prisma.personne.create({
            data: personne
        });
    }
    async update(id, personne) {
        return await prisma.personne.update({
            where: { id },
            data: personne
        });
    }
    async delete(id) {
        await prisma.personne.delete({
            where: { id }
        });
    }
}
//# sourceMappingURL=personne.Repository.js.map