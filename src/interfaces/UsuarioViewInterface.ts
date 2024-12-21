import { Usuario } from "../models/Usuario";

export interface UsuarioViewInterface {
    mostrarUsuarioCriado(usuario: Usuario): void;
    mostrarUsuarios(usuarios: Usuario[]): void;
    emailRepetido(): void;
    loginIncorreto(): void;
    loginCompleto(token: string): void;
    tokenInvalido(token: string): void;
    usuarioInexistente(id: number): void;
    usuarioEditado(id: number): void;
    usuarioDeletado(id: number): void;
}