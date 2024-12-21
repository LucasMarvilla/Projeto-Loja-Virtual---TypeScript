import { UsuarioRepositoryInterface } from "../interfaces/UsuarioRepositoryInterface";
import { UsuarioServiceInterface } from "../interfaces/UsuarioServiceInterface";
import { Usuario } from "../models/Usuario";

export abstract class UsuarioService implements UsuarioServiceInterface {
    private usuarioRepository: UsuarioRepositoryInterface;

    constructor(usuarioRepository: UsuarioRepositoryInterface) {
        this.usuarioRepository = usuarioRepository;
    }

    public verificarCadastro(email: string): boolean {
        const usuario = this.usuarioRepository.buscarPorEmail(email);
        return !usuario;
    }

    public cadastrar(usuario: Usuario): void {
        if (this.verificarCadastro(usuario.getEmail())) {
            this.usuarioRepository.adicionar(usuario);
        } else {
            throw new Error('Email já cadastrado.');
        }
    }

    public login(email: string, senha: string): Usuario | null {
        const usuario = this.usuarioRepository.buscarPorEmail(email);
        if (usuario && usuario.getSenha() === senha) {
            usuario.setLogado(true);
            return usuario;
        }
        return null;
    }

    public editarUsuario(usuarioAtualizado: Usuario): void {
        const usuario = this.usuarioRepository.buscarPorId(usuarioAtualizado.id);
        if (usuario) {
            usuario.setNome(usuarioAtualizado.getNome());
            usuario.setEmail(usuarioAtualizado.getEmail());
            usuario.setSenha(usuarioAtualizado.getSenha());
            usuario.setTelefone(usuarioAtualizado.getTelefone());
        } else {
            throw new Error('Usuário não encontrado.');
        }
    }

    public deletarUsuario(id: number): void {
        this.usuarioRepository.deletarPorId(id);
    }

    public listarUsuarios(): Usuario[] {
        return this.usuarioRepository.listarUsuarios();
    }

    public abstract verificarToken(token: string): boolean;  // DP: TEMPLATE METHOD

    // Novo método para buscar usuario por ID
    public buscarUsuarioPorId(id: number): Usuario | null {
        const usuario = this.usuarioRepository.buscarPorId(id);
        return usuario ? usuario : null;
    }
}