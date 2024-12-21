import { Pedido } from "../models/Pedido";

export interface PedidoViewInterface {
    mostrarPedidoCriado(id: number): void;
    mostrarErro(mensagem: string): void;
    mostrarPedido(pedido: Pedido): void;
    mostrarPagamentoRealizado(id: number): void;
    mostrarJogoAdicionadoAoPedido(idPedido: number): void;
    mostrarPedidoFinalizado(idPedido: number): void;
    pedidoNaoEncontrado(id: number): void;
    pedidoAberto(): void;
    mostrarTotalPedido(total: number): void;
    listarPedidos(pedidos: Pedido[]): void;
    listarPedido(pedido: Pedido): void;
    pedidoDeletado(id: number): void;
    pedidoEditado(id: number): void;
}