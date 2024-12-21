export interface AutenticacaoServiceInterface {
    verificarAcessoAdmin(token: string): boolean;
}