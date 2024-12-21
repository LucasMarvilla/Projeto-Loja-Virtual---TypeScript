import { UsuarioViewInterface } from "../interfaces/UsuarioViewInterface";
import { Usuario } from "../models/Usuario";

export abstract class UsuarioView implements UsuarioViewInterface {
    public mostrarUsuarioCriado(usuario: Usuario): void {
        console.log(`Usuário criado com sucesso!`);
    }

    public mostrarUsuarios(usuarios: Usuario[]): void {
        console.log('Lista de Usuários:');
        console.log(usuarios);
    }

    public emailRepetido(): void {
        console.log('Email já cadastrado! Tente novamente.');
    }

    public loginIncorreto(): void {
        console.log('Login incorreto! Tente novamente.');
    }

    public loginCompleto(token: string): void {
        console.log(`Usuário logado com sucesso! Token: ${token}`);
    }

    public tokenInvalido(token: string): void {
        console.log('Token inválido. Tente novamente.');
    }

    public usuarioInexistente(id: number): void {
        console.log(`Usuário de id ${id} não encontrado! Tente novamente.`);
    }

    public usuarioEditado(id: number): void {
        console.log(`Usuário ${id} editado com sucesso!`);
    }

    public usuarioDeletado(id: number): void {
        console.log(`Usuário ${id} deletado com sucesso!`);
    }
}
