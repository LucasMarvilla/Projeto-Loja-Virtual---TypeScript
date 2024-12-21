import { PedidoViewInterface } from "../interfaces/PedidoViewInterface";
import { Pedido } from "../models/Pedido";

export class PedidoView implements PedidoViewInterface {
    
    public mostrarPedidoCriado(id: number): void {
        console.log(`Pedido ${id} criado com sucesso!`);
    }

    public mostrarErro(mensagem: string): void {
        console.error(`Erro: ${mensagem}`);
    }

    public mostrarPedido(pedido: Pedido): void {
        console.log("Detalhes do pedido:");
        console.log(`ID: ${pedido.id}, Total: R$${pedido.getTotal()}, Status: ${pedido.getStatus()}`);
        console.log("Jogos no pedido:");
        pedido.getJogosPedidos().forEach(jogoPedido => {
            console.log(`Jogo ID: ${jogoPedido.getIdJogo()}, Preço: R$${jogoPedido.getPrecoJogo()}, Quantidade: ${jogoPedido.getQuantidade()}`);
        });
    }

    public mostrarPagamentoRealizado(id: number): void {
        console.log(`Pagamento do pedido de ID ${id} realizado com sucesso.`);
    }

    public mostrarJogoAdicionadoAoPedido(idPedido: number): void {
        console.log(`Jogo adicionado ao pedido de ID ${idPedido} com sucesso!`);
    }

    public mostrarPedidoFinalizado(idPedido: number): void {
        console.log(`Pedido de ID ${idPedido} finalizado com sucesso!`);
    }

    public pedidoNaoEncontrado(id: number): void {
        console.log(`Pedido de ID ${id} não encontrado. Tente novamente!`);
    }

    public pedidoAberto(): void {
        console.log('O pedido ainda está aberto e não pode ser finalizado.');
    }

    public mostrarTotalPedido(total: number): void {
        console.log(`O total do pedido eh: R$${total}`);
    }

    public listarPedidos(pedidos: Pedido[]): void {
        console.log("Lista de pedidos:");
        pedidos.forEach(pedido => {
            console.log(`Pedido ID: ${pedido.id}, Total: R$${pedido.getTotal()}, Status: ${pedido.getStatus()}`);
        });
    }

    public listarPedido(pedido: Pedido): void {
        console.log(`Pedido ID: ${pedido.id}, Total: R$${pedido.getTotal()}, Status: ${pedido.getStatus()}`);
        console.log("Jogos no pedido:");
        pedido.getJogosPedidos().forEach(jogoPedido => {
            console.log(`Jogo ID: ${jogoPedido.getIdJogo()}, Preço: R$${jogoPedido.getPrecoJogo()}, Quantidade: ${jogoPedido.getQuantidade()}`);
        });
    }

    public pedidoDeletado(id: number): void {
        console.log(`Pedido de ID ${id} deletado com sucesso!`);
    }

    public pedidoEditado(id: number): void {
        console.log(`Pedido de ID ${id} editado com sucesso!`);
    }
}