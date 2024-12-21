import * as readlineSync from 'readline-sync';
import { SistemaMediator } from './Mediator';

export class Main {
    public iniciar_sistema(): void {
        const mediator = new SistemaMediator();
        let opcao: string;
        do {
            console.log("\n==== Loja de Jogos ====");
            console.log("1 - Login como CLIENTE");
            console.log("2 - Login como ADMINISTRADOR");
            console.log("3 - JOGOS");
            console.log("4 - PEDIDO");
            console.log("5 - JOGO_PEDIDO");
            console.log("0 - Sair");

            opcao = readlineSync.question("Escolha uma opcao: ");
            mediator.executarComando(opcao);
        }
        while (opcao !== '0');
    }
}

const main = new Main();
main.iniciar_sistema();