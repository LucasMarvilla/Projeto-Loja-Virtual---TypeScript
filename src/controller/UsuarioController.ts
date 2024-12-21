import * as readlineSync from 'readline-sync';
import { Usuario } from '../models/Usuario';
import { UsuarioViewInterface } from '../interfaces/UsuarioViewInterface';
import { UsuarioServiceInterface } from '../interfaces/UsuarioServiceInterface';

export abstract class UsuarioController {
    private usuarioService: UsuarioServiceInterface;
    private usuarioView: UsuarioViewInterface;

    public constructor(usuarioService: UsuarioServiceInterface, usuarioView: UsuarioViewInterface) {
        this.usuarioService = usuarioService;
        this.usuarioView = usuarioView;
    }

    protected abstract factoryCriarUsuario(id: number, nome: string, email: string, senha: string, telefone: string): Usuario;

    public cadastrar(id: number, nome: string, email: string, senha: string, telefone: string): void {
        const usuario = this.factoryCriarUsuario(id, nome, email, senha, telefone);

        if (!this.usuarioService.verificarCadastro(usuario.getEmail())) {
            this.usuarioView.emailRepetido();
            return;
        }
        try {
            this.usuarioService.cadastrar(usuario);
            this.usuarioView.mostrarUsuarioCriado(usuario);
        } catch (error) {
            this.usuarioView.emailRepetido();
        }

    }

    public login(email: string, senha: string): void {
        const usuario = this.usuarioService.login(email, senha);
        if (!usuario) {
            this.usuarioView.loginIncorreto();
            return;
        }

        this.usuarioView.loginCompleto(usuario.getToken());
    }

    public editar(token: string, id: number, nome: string, email: string, senha: string, telefone: string): void {
        if (!this.usuarioService.verificarToken(token)) {
            this.usuarioView.tokenInvalido(token);
            return;
        }
        try {
            const usuarioAtualizado = this.factoryCriarUsuario(id, nome, email, senha, telefone);
            this.usuarioService.editarUsuario(usuarioAtualizado);
            this.usuarioView.usuarioEditado(id);
        } catch (error) {
            this.usuarioView.usuarioInexistente(id);
        }
    }

    public deletar(token: string, id: number): void {
        if (!this.usuarioService.verificarToken(token)) {
            this.usuarioView.tokenInvalido(token);
            return;
        }
    
        const usuario = this.usuarioService.buscarUsuarioPorId(id);
        if (!usuario) {
            this.usuarioView.usuarioInexistente(id);
            return;
        }
    
        this.usuarioService.deletarUsuario(id);
        this.usuarioView.usuarioDeletado(id);
    }

    public listarUsuarios(): void {
        const usuarios = this.usuarioService.listarUsuarios();
        this.usuarioView.mostrarUsuarios(usuarios);
    }

    public iniciar(): void {
        let opcao: string;
        do {
            console.log("\n==== Usuario ====");
            console.log("1 - Cadastrar");
            console.log("2 - Login");
            console.log("3 - Editar");
            console.log("4 - Deletar");
            console.log("5 - Listar usuarios");
            console.log("0 - Sair");

            opcao = readlineSync.question("Escolha uma opcao: ");

            switch (opcao) {
                case '1': {
                    const id = Number(readlineSync.question("Digite o ID: "));
                    const nome = readlineSync.question("Digite o seu nome: ");
                    const email = readlineSync.question("Digite o seu email: ");
                    const senha = readlineSync.question("Digite o seu senha: ");
                    const telefone = readlineSync.question("Digite o seu telefone: ");
                    this.cadastrar(id, nome, email, senha, telefone);
                    break;
                }
                case '2': {
                    const email = readlineSync.question("Digite o seu email: ");
                    const senha = readlineSync.question("Digite o seu senha: ");
                    this.login(email, senha);
                    break;
                }
                case '3': {
                    const token = readlineSync.question("Digite o seu token de acesso: ");
                    const id = Number(readlineSync.question("Digite o ID do usuario: "));
                    const nome = readlineSync.question("Digite o nome: ");
                    const email = readlineSync.question("Digite o email: ");
                    const senha = readlineSync.question("Digite a senha: ");
                    const telefone = readlineSync.question("Digite o telefone: ");
                    this.editar(token, id, nome, email, senha, telefone);
                    break;
                }
                case '4': {
                    const token = readlineSync.question("Digite o seu token de acesso: ");
                    const id = Number(readlineSync.question("Qual eh o ID do usuario que deseja deletar? "));
                    this.deletar(token, id);
                    break;
                }
                case '5': {
                    this.listarUsuarios();
                    break;
                }
                case '0':
                    console.log("Saindo...");
                    return;
                default:
                    console.log("Opcao invalida. Tente novamente.");
            }
        } while (opcao !== '0');
    }
}