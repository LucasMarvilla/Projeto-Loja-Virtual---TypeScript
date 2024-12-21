import { UsuarioRepositoryInterface } from "../interfaces/UsuarioRepositoryInterface";
import { Cliente } from "../models/Cliente";

export class ClienteRepository implements UsuarioRepositoryInterface {
    private static instance: ClienteRepository;
    private clientes: Cliente[] = [];

    // Construtor privado para evitar múltiplas instâncias
    private constructor(clientes: Cliente[] = []) {
        this.clientes = clientes;
    }

    // Método estático para acessar a instância única
    public static getInstance(): ClienteRepository {
        if (!ClienteRepository.instance) {
            ClienteRepository.instance = new ClienteRepository();
        }
        return ClienteRepository.instance;
    }

    public adicionar(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    public buscarPorEmail(email: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getEmail() === email);
    }

    public buscarPorId(id: number): Cliente | undefined {
        return this.clientes.find(cliente => cliente.id === id);
    }

    public listarUsuarios(): Cliente[] {
        return this.clientes;
    }

    public deletarPorId(id: number): void {
        const index = this.clientes.findIndex(cliente => cliente.id === id);
        if (index !== -1) {
            this.clientes.splice(index, 1);
        }
    }
}