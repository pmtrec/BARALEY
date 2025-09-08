import z from "zod";
export const PersonneChema = z.object({
    nom: z.string().min(1, "Au moins un carateres").max(50, "Au plus 50 caracteres"),
    prenom: z.string().min(1, "Au moins un carateres").max(50, "Au plus 50 caracteres"),
    age: z.coerce.number()
        .int("L'âge doit être un entier")
        .min(0, "L'âge doit être positif")
        .max(120, "L'âge doit être inférieur ou égal à 120")
});
//# sourceMappingURL=validateChema.js.map