{/* ESSENCIAIS */}
import { Router, Request, Response } from "express";
// import multer from 'multer'; -> caso seja utilizado anexo de arquivos na app

{/* CONTROLLERS */}
// user controllers
import { CreateUserController } from "./controllers/user/CreateUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { AuthUserController } from "./controllers/auth/AuthUserController";

{/* MIDDLEWARES */}
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateInssueController } from "./controllers/inssues/CreateInssueController";
import { UndeletUserController } from "./controllers/user/UndeletUserController";

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
/**
 * A Exclusão de usuário não apaga o mesmo, apenas
 * atribui o valor TRUE ao boolean Excluded no banco
 * de dados.
 */
router.put('/user/exclude', new DeleteUserController().handle)
// Retirar exclusão de usuario
router.put('/user/undelete', new UndeletUserController().handle)

{/* ROTA DE LOGIN */}
router.post('/session', new AuthUserController().handle)

{/* ROTAS DE INSSUES */}
router.post('/issue/create', new CreateInssueController().handle)