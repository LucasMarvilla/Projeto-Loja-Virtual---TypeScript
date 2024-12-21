import { AutenticacaoServiceInterface } from "../interfaces/AutenticacaoServiceInterface";
import { AdminModel } from "../models/AdminModel";

export class AutenticacaoService implements AutenticacaoServiceInterface {
    private adminModel: AdminModel;

    constructor(adminModel: AdminModel) {
        this.adminModel = adminModel;
    }

    public verificarAcessoAdmin(token: string): boolean {
        return this.adminModel.verificar_token(token);
    }
}