import { PedidoRepositoryInterface } from "../interfaces/PedidoRepositoryInterface";
import { JogoPedido } from "../models/JogoPedido";
import { Pedido } from "../models/Pedido";

export class PedidoService {
    private pedidoRepository: PedidoRepositoryInterface;

    constructor(pedidoRepository: PedidoRepositoryInterface) {
        this.pedidoRepository = pedidoRepository;
    }

    public criarPedido(pedido: Pedido, jogoPedido: JogoPedido): void {
        this.pedidoRepository.adicionarJogoPedido(pedido, jogoPedido);
        this.pedidoRepository.cadastrar(pedido);
    }

    public buscarPedidoPorId(id: number): Pedido | undefined {
        return this.pedidoRepository.listarPedido(id);
    }

    public adicionarJogoAoPedido(pedido: Pedido, jogoPedido: JogoPedido): void {
        this.pedidoRepository.adicionarJogoPedido(pedido, jogoPedido);
        pedido.adicionarJogoPedido(jogoPedido); // Atualiza o pedido no repositório
    }

    public finalizarPedido(pedido: Pedido): number {
        const total = this.pedidoRepository.finalizarPedido(pedido);
        this.pedidoRepository.preencherTotal(pedido, total);
        this.pedidoRepository.alterarStatus(pedido, 'Fechado');
        return total;
    }

    public realizarPagamento(pedido: Pedido, formaPagamento: string): void {
        if (this.pedidoRepository.getStatus(pedido) !== 'Fechado') {
            throw new Error("O pedido ainda não está fechado.");
        }
        this.pedidoRepository.alterarPagamento(pedido, formaPagamento);
        this.pedidoRepository.alterarStatus(pedido, 'Pago');
    }

    public listarPedidos(): Pedido[] {
        return this.pedidoRepository.listarPedidos();
    }

}