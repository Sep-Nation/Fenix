import { prismaClient } from "../../prisma"
import { hash } from "bcryptjs";

interface UserRequest {
  name: string;
  nickname: string;
  password: string;
  email: string;
  group_id: string;
}

export class CreateUserService {
  async execute( {name, nickname, password, email, group_id }: UserRequest) {
    {/* VERIFICAÇÕES */}

    // Verificar se todos os dados foram enviados
    if(!name || !nickname || !password || !email || !group_id){
      throw new Error("Informe todos os dados para cadastro")
    }

    // Verificar se o email já está cadastrado
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if(userAlreadyExists){
      throw new Error("User already exists")
    }
    {/* FIM DA LOGICA DE VERIFICAÇÃO DE DUPLICIDADE */}

    {/* ------------------------------------- */}

    {/* CRIPTOGRAFIA DA SENHA */}

    // criptografia de senha via hash 8
    const passwordHash = await hash(password, 8)
    {/* FIM DA LOGICA DE CRIPTOGRAFIA DA SENHA */}

    {/* ------------------------------------- */}

    {/* CADASTRO DE USUARIO */}

    const user = await prismaClient.user.create({
      data: {
        name: name,
        nickname: nickname,
        password: passwordHash,
        email: email,
        group_id: group_id
      },
      select: {
        id: true,
        name: true,
        email: true,
      }
    });

    return user;
  }
}