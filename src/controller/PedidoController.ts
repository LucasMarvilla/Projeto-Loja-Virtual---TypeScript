import * as readlineSync from 'readline-sync';
import { PedidoView } from '../views/PedidoView';
import { Pedido } from '../models/Pedido';
import { JogoPedido } from '../models/JogoPedido';
import { PedidoService } from '../services/PedidoService';
import { PedidoViewInterface } from '../interfaces/PedidoViewInterface';
import { JogoRepository } from '../repositories/JogoRepository';

export class PedidoController {
    private pedidoService: PedidoService;
    private pedidoView: PedidoViewInterface;
    private jogoRepository: JogoRepository;
    
    constructor(pedidoService: PedidoService, pedidoView: PedidoViewInterface, jogoRepository: JogoRepository) {
        this.pedidoService = pedidoService;
        this.pedidoView = pedidoView;
        this.jogoRepository = jogoRepository;
    }
    
    public criarPedido(id: number, idJogo: number, quantidade: number): void {
        const dataAtual = new Date().toISOString().split('T')[0];
        const jogo = this.jogoRepository.list_jogo(idJogo);

        if (!jogo) {
            this.pedidoView.mostrarErro("Jogo não encontrado.");
            return;
        }

        const pedido = new Pedido(id, dataAtual);
        const jogoPedido = new JogoPedido(pedido.id, idJogo, jogo.getPreco(), quantidade);
        this.pedidoService.criarPedido(pedido, jogoPedido);
        this.pedidoView.mostrarPedidoCriado(id);
    }

    public adicionarJogoAoPedido(idPedido: number, idJogo: number, quantidade: number): void {
        const jogo = this.jogoRepository.list_jogo(idJogo);
        const pedido = this.pedidoService.buscarPedidoPorId(idPedido);

        if (!jogo) {
            this.pedidoView.mostrarErro("Jogo não encontrado.");
            return;
        }

        if (!pedido) {
            this.pedidoView.mostrarErro("Pedido não encontrado.");
            return;
        }

        const jogoPedido = new JogoPedido(pedido.id, idJogo, jogo.getPreco(), quantidade);
        this.pedidoService.adicionarJogoAoPedido(pedido, jogoPedido);
        this.pedidoView.mostrarJogoAdicionadoAoPedido(idPedido);
    }

    public finalizarPedido(idPedido: number): void {
        const pedido = this.pedidoService.buscarPedidoPorId(idPedido);

        if (!pedido) {
            this.pedidoView.mostrarErro("Pedido não encontrado.");
            return;
        }

        this.pedidoService.finalizarPedido(pedido);
        this.pedidoView.mostrarPedidoFinalizado(idPedido);
    }

    public realizarPagamento(idPedido: number, formaPagamento: string): void {
        const pedido = this.pedidoService.buscarPedidoPorId(idPedido);

        if (!pedido) {
            this.pedidoView.mostrarErro("Pedido não encontrado.");
            return;
        }

        try {
            this.pedidoService.realizarPagamento(pedido, formaPagamento);
            this.pedidoView.mostrarPagamentoRealizado(idPedido);
        } catch (error: any) {
            this.pedidoView.mostrarErro(error.message);
        }
    }

    public mostrarPedido(idPedido: number): void {
        const pedido = this.pedidoService.buscarPedidoPorId(idPedido);

        if (!pedido) {
            this.pedidoView.mostrarErro("Pedido não encontrado.");
            return;
        }

        this.pedidoView.mostrarPedido(pedido);
    }
    
    public iniciar(): void {
        let opcao: string;
        do {
            console.log("\n==== Pedidos ====");
            console.log("1 - Criar Pedido");
            console.log("2 - Adicionar Jogo ao Pedido");
            console.log("3 - Finalizar Pedido");
            console.log("4 - Realizar Pagamento");
            console.log("5 - Mostrar Pedido");
            console.log("0 - Sair");

            opcao = readlineSync.question("Escolha uma opcao: ");

            switch (opcao) {
                case '1': {
                    const id = Number(readlineSync.question("Qual eh o ID do pedido? "));
                    const idJogo = Number(readlineSync.question("Qual eh o ID do jogo? "));
                    const quantidade = Number(readlineSync.question("Qual eh a quantidade do jogo? "));
                    this.criarPedido(id, idJogo, quantidade);
                    break;
                }
                case '2': {
                    const idPedido = Number(readlineSync.question("Qual eh o ID do pedido? "));
                    const idJogo = Number(readlineSync.question("Qual eh o ID do jogo? "));
                    const quantidade = Number(readlineSync.question("Qual eh a quantidade do jogo? "));
                    this.adicionarJogoAoPedido(idPedido, idJogo, quantidade);
                    break;
                }
                case '3': {
                    const idPedido = Number(readlineSync.question("Qual eh o ID do pedido? "));
                    this.finalizarPedido(idPedido);
                    break;
                }
                case '4': {
                    const idPedido = Number(readlineSync.question("Qual eh o ID do pedido? "));
                    const formaPagamento = readlineSync.question("Qual eh a forma de pagamento? ");
                    this.realizarPagamento(idPedido, formaPagamento);
                    break;
                }
                case '5': {
                    const idPedido = Number(readlineSync.question("Qual eh o ID do pedido? "));
                    this.mostrarPedido(idPedido);
                    break;
                }
                case '0':
                    console.log("Saindo...");
                    break;
                default:
                    console.log("Opcao invalida. Tente novamente.");
            }
        } while (opcao !== '0');
    }

}