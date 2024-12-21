import { Jogo } from "../models/Jogo";

export interface JogoRepositoryInterface {
    cadastrar(jogo: Jogo): void;
    deletar_jogo(id: number): void;
    list_jogos(): Jogo[];
    list_jogo(id: number): Jogo | undefined;
    editar_jogo(jogoAtualizado: Jogo): void;
}