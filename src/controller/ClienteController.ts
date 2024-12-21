import { UsuarioController } from './UsuarioController';
import { ClienteView } from '../views/ClienteView';
import { Cliente } from '../models/Cliente';
import { ClienteService } from '../services/ClienteService';

export class ClienteController extends UsuarioController {
    constructor(clienteService: ClienteService, clienteView: ClienteView) {
        super(clienteService, clienteView);
    }

    protected factoryCriarUsuario(id: number, nome: string, email: string, senha: string, telefone: string): Cliente {
        return new Cliente(id, nome, email, senha, telefone);
    }
}