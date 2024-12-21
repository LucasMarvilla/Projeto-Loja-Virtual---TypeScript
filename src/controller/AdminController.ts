import { Admin } from '../models/Admin';
import { AdminView } from '../views/AdminView';
import { UsuarioController } from './UsuarioController';
import { AdminService } from '../services/AdminService';

export class AdminController extends UsuarioController {
    constructor(adminService: AdminService, adminView: AdminView) {
        super(adminService, adminView);
    }

    protected factoryCriarUsuario(id: number, nome: string, email: string, senha: string, telefone: string): Admin {
        return new Admin(id, nome, email, senha, telefone);
    }
}