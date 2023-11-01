import { Request, Response } from "express";
import { AuthUserService } from "../../services/Auth/AuthUserService";

export class AuthUserController {
  async handle(req: Request, res: Response) {

    // Captura o email e senha da requisição
    const { email, password } = req.body

    // Inicializa o serviço de autenticação
    const authUserService = new AuthUserService();

    // Executa o método do serviço de autenticação
    {/* NÃO ESQUECER O AWAIT PARA ESPERAR A RESPOSTA DA AUTENTICAÇÃO
  ANTES DE PROSSEGUIR */}
    const auth = await authUserService.execute({
      email,
      password
    })

    // Retorna para o usuário
    return res.json(auth)
  }
}