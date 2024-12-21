import { ClienteRepository } from "../repositories/ClienteRepository";
import { UsuarioService } from "./UsuarioService";

export class ClienteService extends UsuarioService {
    constructor(clienteRepository: ClienteRepository) {
        super(clienteRepository);  // Passa o repositório específico para o serviço
    }

    public verificarToken(token: string): boolean {
        return token === 'jwt_cliente';  // Verificação específica para Cliente
    }
}