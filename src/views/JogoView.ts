import { JogoViewInterface } from "../interfaces/JovoViewInterface";
import { Jogo } from "../models/Jogo";

export class JogoView implements JogoViewInterface {
    mostrarJogoCriado(jogo: Jogo): void {
        console.log(`Jogo "${jogo.getTitulo()}" criado com sucesso!`);
    }

    mostrarErro(mensagem: string): void {
        console.error(`Erro: ${mensagem}`);
    }

    mostrarJogos(jogos: Jogo[]): void {
        console.log("Lista de jogos disponíveis:");
        jogos.forEach(jogo => {
            console.log(`${jogo.id}: ${jogo.getTitulo()} - R$ ${jogo.getPreco()}`);
        });
    }

    mostrarJogo(jogo: Jogo): void {
        console.log(`Detalhes do jogo: ${jogo.getTitulo()} - Preço: R$ ${jogo.getPreco()}`);
    }

    mostrarJogoDeletado(id: number): void {
        console.log(`Jogo com ID ${id} foi deletado.`);
    }
}