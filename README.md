npm init -y
npm install express cors helmet dotenv
npm install prisma --save-dev
npm install @prisma/client
//Initialiser prisma 
px prisma init --datasource-provider mysql
migrer mon prisma vers le database 
npx prisma migrate dev --name init
generer le fichier migration en sql
npx prisma generate

on an creer interface complique 
interface ICrud<T,Tcreate,Tupdate = Partial<Tcreate>,Tkey = number> {
    findAll():Promise<T[]>
    findById(id:Tkey):Promise<T | null>
    create(data:Tcreate):Promise<T>
    update(id:Tkey,data:Tupdate):Promise<T>
    delete(id:Tkey):Promise<void>
}


'ICrud' is declared but its value is never read.ts(6133)
'ICrud' is a type and must be imported using a type-only import when 'verbatimModuleSyntax' is enabled.ts(1484)

mettre type tjs dit bara