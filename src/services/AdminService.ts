import { AdminRepository } from "../repositories/AdminRepository";
import { UsuarioService } from "./UsuarioService";

export class AdminService extends UsuarioService {
    constructor(adminRepository: AdminRepository) {
        super(adminRepository);  // Passa o repositório específico para o serviço
    }

    public verificarToken(token: string): boolean {
        return token === 'jwt_admin';  // Verificação específica para Admin
    }
}