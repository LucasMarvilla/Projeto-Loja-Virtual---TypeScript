import { Usuario } from "../models/Usuario";

export interface UsuarioServiceInterface {
    verificarCadastro(email: string): boolean;
    buscarUsuarioPorId(id: number): Usuario | null;
    cadastrar(usuario: Usuario): void;
    login(email: string, senha: string): Usuario | null;
    editarUsuario(usuario: Usuario): void;
    deletarUsuario(id: number): void;
    listarUsuarios(): Usuario[];
    verificarToken(token: string): boolean;  // DP: TEMPLATE METHOD
}