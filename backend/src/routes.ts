{/* ESSENCIAIS */}
import { Router, Request, Response } from "express";
// import multer from 'multer'; -> caso seja utilizado anexo de arquivos na app

{/* CONTROLLERS */}
// user controllers
import { CreateUserController } from "./controllers/user/CreateUserController";

export const router = Router();

// NAO UTILIZAR E NAO APAGAR
router.get('/fire', (req: Request, res: Response) => {
  return res.json({ 
    project: "fenix",
    authors: "Lucas D, Eduardo R"  
  })
})

router.get('/inssueExample', (req: Request, res: Response) => {
  return res.json({
    id: "default",
    title: "string",
    information: "string",
    status: "enum de InssueStatus",
    inssueStatus: "RESOLVED, INPROGRESS, CLOSED",
    draft: "default true"
  })
})

{/* ROTAS USER */}
// criação de usuário
router.post('/user/add', new CreateUserController().handle)