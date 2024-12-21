import { Jogo } from "../models/Jogo";

export interface JogoViewInterface {
    mostrarJogoCriado(jogo: Jogo): void;
    mostrarErro(mensagem: string): void;
    mostrarJogos(jogos: Jogo[]): void;
    mostrarJogo(jogo: Jogo): void;
    mostrarJogoDeletado(id: number): void;
    mostrarJogoEditado(id: number): void;
}