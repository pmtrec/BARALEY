import type { Request, Response } from "express";
export declare function getAll(req: Request, res: Response): Promise<void>;
export declare function CreatePersonne(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function UpdatePersonne(req: Request<{
    id: string;
}>, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function DeletePersonne(req: Request<{
    id: string;
}>, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
export declare function findByIdPersonne(req: Request<{
    id: string;
}>, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=personne.controller.d.ts.map