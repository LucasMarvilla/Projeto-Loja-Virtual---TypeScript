import * as readlineSync from 'readline-sync';
import { Jogo } from '../models/Jogo';
import { JogoViewInterface } from '../interfaces/JovoViewInterface';
import { JogoService } from '../services/JogoService';

export class JogoController {
    private jogoService: JogoService;
    private jogoView: JogoViewInterface;

    constructor(jogoService: JogoService, jogoView: JogoViewInterface) {
        this.jogoService = jogoService;
        this.jogoView = jogoView;
    }

    public cadastrarNovoJogo(id: number, titulo: string, desenvolvedora: string, plataforma: string, dataLancamento: string, preco: number, descricao: string, quantidade: number, categoria: string): void {
        try {
            const novoJogo = new Jogo(id, titulo, desenvolvedora, plataforma, dataLancamento, preco, descricao, quantidade, categoria);
            this.jogoService.cadastrarJogo(novoJogo);
            this.jogoView.mostrarJogoCriado(novoJogo);
        } catch (error: any) {
            this.jogoView.mostrarErro(error.message);
        }
    }

    public editarJogo(id: number, titulo: string, desenvolvedora: string, plataforma: string, dataLancamento: string, preco: number, descricao: string, quantidade: number, categoria: string): void {
        try {
            const jogoAtualizado = new Jogo(id, titulo, desenvolvedora, plataforma, dataLancamento, preco, descricao, quantidade, categoria);
            this.jogoService.editarJogo(jogoAtualizado);
        } catch (error: any) {
            this.jogoView.mostrarErro(error.message);
        }
    }

    public deletarJogo(id: number): void {
        try {
            this.jogoService.deletarJogo(id);
            this.jogoView.mostrarJogoDeletado(id);
        } catch (error: any) {
            this.jogoView.mostrarErro(error.message);
        }
    }

    public listarJogos(): void {
        const jogos = this.jogoService.listarJogos();
        this.jogoView.mostrarJogos(jogos);
    }

    public buscarJogo(id: number): void {
        const jogo = this.jogoService.buscarJogo(id);
        if (jogo) {
            this.jogoView.mostrarJogo(jogo);
        } else {
            this.jogoView.mostrarErro("Jogo não encontrado");
        }
    }

    public iniciar(): void {
        let opcao: string;

        do {
            console.log("\n==== Menu de Jogos ====");
            console.log("1 - Listar Jogos");
            console.log("2 - Buscar Jogo por ID");
            console.log("3 - Cadastrar Jogo");
            console.log("4 - Editar Jogo");
            console.log("5 - Deletar Jogo");
            console.log("0 - Sair");

            opcao = readlineSync.question("Escolha uma opcao: ");

            switch (opcao) {
                case '1':
                    this.listarJogos();
                    break;
                case '2': {
                    const id = Number(readlineSync.question("Digite o ID do jogo: "));
                    this.buscarJogo(id);
                    break;
                }
                case '3': {
                    const id = Number(readlineSync.question("Digite o ID do jogo: "));
                    const titulo = readlineSync.question("Digite o titulo do jogo: ");
                    const desenvolvedora = readlineSync.question("Digite a desenvolvedora: ");
                    const plataforma = readlineSync.question("Digite a plataforma: ");
                    const dataLancamento = readlineSync.question("Digite a data de lancamento (yyyy-mm-dd): ");
                    const preco = Number(readlineSync.question("Digite o preco: "));
                    const descricao = readlineSync.question("Digite a descricao do jogo: ");
                    const quantidade = Number(readlineSync.question("Digite a quantidade em estoque: "));
                    const categoria = readlineSync.question("Digite a categoria do jogo: ");
                    this.cadastrarNovoJogo(id, titulo, desenvolvedora, plataforma, dataLancamento, preco, descricao, quantidade, categoria);
                    break;
                }
                case '4': {
                    const id = Number(readlineSync.question("Digite o ID do jogo: "));
                    const titulo = readlineSync.question("Digite o novo título do jogo: ");
                    const desenvolvedora = readlineSync.question("Digite a nova desenvolvedora: ");
                    const plataforma = readlineSync.question("Digite a nova plataforma: ");
                    const dataLancamento = readlineSync.question("Digite a nova data de lançamento (yyyy-mm-dd): ");
                    const preco = Number(readlineSync.question("Digite o novo preço: "));
                    const descricao = readlineSync.question("Digite a nova descrição do jogo: ");
                    const quantidade = Number(readlineSync.question("Digite a nova quantidade em estoque: "));
                    const categoria = readlineSync.question("Digite a categoria do jogo: ");
                    this.editarJogo(id, titulo, desenvolvedora, plataforma, dataLancamento, preco, descricao, quantidade, categoria);
                    break;
                }
                case '5': {
                    const id = Number(readlineSync.question("Digite o ID do jogo que deseja deletar: "));
                    this.deletarJogo(id);
                    break;
                }
                case '0':
                    console.log("Saindo do sistema...");
                    break;
                default:
                    console.log("Opcao invalida! Tente novamente.");
            }

        } while (opcao !== '0');
    }
}