import { UsuarioRepositoryInterface } from "../interfaces/UsuarioRepositoryInterface";
import { Usuario } from "../models/Usuario";

export class UsuarioRepository implements UsuarioRepositoryInterface {
    private usuarios: Usuario[] = [];

    constructor(usuarios: Usuario[] = []) {
        this.usuarios = usuarios;
    }

    public adicionar(usuario: Usuario): void {
        this.usuarios.push(usuario);
    }

    public buscarPorEmail(email: string): Usuario | undefined {
        return this.usuarios.find(usuario => usuario.getEmail() === email);
    }

    public buscarPorId(id: number): Usuario | undefined {
        return this.usuarios.find(usuario => usuario.id === id);
    }

    public listarUsuarios(): Usuario[] {
        return this.usuarios;
    }

    public deletarPorId(id: number): void {
        const index = this.usuarios.findIndex(usuario => usuario.id === id);
        if (index !== -1) {
            this.usuarios.splice(index, 1);
        }
    }
}