import { Usuario } from "../models/Usuario";

export interface UsuarioRepositoryInterface {
    adicionar(usuario: Usuario): void;
    buscarPorEmail(email: string): Usuario | undefined;
    buscarPorId(id: number): Usuario | undefined;  // Método já existente
    listarUsuarios(): Usuario[];
    deletarPorId(id: number): void;
}