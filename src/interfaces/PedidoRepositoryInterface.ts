import { JogoPedido } from "../models/JogoPedido";
import { Pedido } from "../models/Pedido";

export interface PedidoRepositoryInterface {
    cadastrar(pedido: Pedido): void;
    adicionarJogoPedido(pedido: Pedido, jogoPedido: JogoPedido): void;
    finalizarPedido(pedido: Pedido): number;
    preencherTotal(pedido: Pedido, total: number): void;
    alterarStatus(pedido: Pedido, status: string): void;
    alterarPagamento(pedido: Pedido, formaPagamento: string): void;
    listarPedidos(): Pedido[];
    listarPedido(id: number): Pedido | undefined;
    getStatus(pedido: Pedido): string;
}