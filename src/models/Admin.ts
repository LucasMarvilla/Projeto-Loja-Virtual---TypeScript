import { Usuario } from "./Usuario";

export class Admin extends Usuario {
    constructor(id: number, nome: string, email: string, senha: string, telefone: string) {
        super(id, nome, email, senha, telefone);
        this.token = 'jwt_admin';
        this.tipo = '1';
    }
}