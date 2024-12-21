import { UsuarioRepositoryInterface } from "../interfaces/UsuarioRepositoryInterface";
import { Admin } from "../models/Admin";

export class AdminRepository implements UsuarioRepositoryInterface {
    private static instance: AdminRepository;
    private admins: Admin[] = [];

    private constructor(admins: Admin[] = []) {
        this.admins = admins;
    }

    public static getInstance(): AdminRepository {
        if (!AdminRepository.instance) {
            AdminRepository.instance = new AdminRepository();
        }
        return AdminRepository.instance;
    }

    public adicionar(admin: Admin): void {
        this.admins.push(admin);
    }

    public buscarPorEmail(email: string): Admin | undefined {
        return this.admins.find(admin => admin.getEmail() === email);
    }

    public buscarPorId(id: number): Admin | undefined {
        return this.admins.find(admin => admin.id === id);
    }

    public listarUsuarios(): Admin[] {
        return this.admins;
    }

    public deletarPorId(id: number): void {
        const index = this.admins.findIndex(admin => admin.id === id);
        if (index !== -1) {
            this.admins.splice(index, 1);
        }
    }
}