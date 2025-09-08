import z from "zod";
export declare const PersonneChema: z.ZodObject<{
    nom: z.ZodString;
    prenom: z.ZodString;
    age: z.z.ZodCoercedNumber<unknown>;
}, z.z.core.$strip>;
//# sourceMappingURL=validateChema.d.ts.map