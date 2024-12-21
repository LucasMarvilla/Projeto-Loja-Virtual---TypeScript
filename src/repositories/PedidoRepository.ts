import { PedidoRepositoryInterface } from "../interfaces/PedidoRepositoryInterface";
import { JogoPedido } from "../models/JogoPedido";
import { Pedido } from "../models/Pedido";

export class PedidoRepository implements PedidoRepositoryInterface {
    private static instance: PedidoRepository;
    private pedidos: Pedido[] = [];

    private constructor() {}

    public static getInstance(): PedidoRepository {
        if (!PedidoRepository.instance) {
            PedidoRepository.instance = new PedidoRepository();
        }
        return PedidoRepository.instance;
    }

    public cadastrar(pedido: Pedido): void {
        this.pedidos.push(pedido);
    }

    public adicionarJogoPedido(pedido: Pedido, jogoPedido: JogoPedido): void {
        pedido.adicionarJogoPedido(jogoPedido);
    }

    public finalizarPedido(pedido: Pedido): number {
        return pedido.getTotal();
    }

    public preencherTotal(pedido: Pedido, total: number): void {
        pedido.setTotal(total);
    }

    public alterarStatus(pedido: Pedido, status: string): void {
        pedido.setStatus(status);
    }

    public alterarPagamento(pedido: Pedido, formaPagamento: string): void {
        pedido.setFormaPagamento(formaPagamento);
    }

    public listarPedidos(): Pedido[] {
        return this.pedidos;
    }

    public listarPedido(id: number): Pedido | undefined {
        return this.pedidos.find(pedido => pedido.id === id);
    }

    public getStatus(pedido: Pedido): string {
        return pedido.getStatus();
    }
}