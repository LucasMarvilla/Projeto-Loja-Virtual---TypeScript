import { Usuario } from "./Usuario";

export class Cliente extends Usuario {
    constructor(id: number, nome: string, email: string, senha: string, telefone: string) {
        super(id, nome, email, senha, telefone);
        this.token = 'jwt_cliente';
        this.tipo = '1';
    }
}