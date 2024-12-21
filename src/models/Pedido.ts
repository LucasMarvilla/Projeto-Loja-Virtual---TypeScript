import { JogoPedido } from "./JogoPedido";

export class Pedido {
    public id: number;
    private total: number = 0;
    private forma_pagamento: string;
    private data: string;
    private status: string = 'Inexistente'; // Aberto, Fechado, Pago 
    private jogos_pedidos: JogoPedido[] = [];

    public constructor(id: number, data: string) {
        this.id = id;
        this.data = data;
        this.forma_pagamento = ''; 
        this.status = 'Aberto';
    }

    // Getters
    public getId(): number {
        return this.id;
    }

    public getTotal(): number {
        return this.jogos_pedidos.reduce((total, jogoPedido) => total + jogoPedido.getSubtotal(), 0);
    }

    public getFormaPagamento(): string {
        return this.forma_pagamento;
    }

    public getData(): string {
        return this.data;
    }

    public getStatus(): string {
        return this.status;
    }

    public getJogosPedidos(): JogoPedido[] {
        return this.jogos_pedidos;
    }

    // Setters
    public setTotal(total: number): void {
        this.total = total;
    }

    public setFormaPagamento(forma_pagamento: string): void {
        this.forma_pagamento = forma_pagamento;
    }

    public setData(data: string): void {
        this.data = data;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public adicionarJogoPedido(jogoPedido: JogoPedido): void {
        this.jogos_pedidos.push(jogoPedido);
    }

    public removerJogoPedido(id_jogoPedido: number): void {
        this.jogos_pedidos = this.jogos_pedidos.filter(jogo => jogo.getId() !== id_jogoPedido);
    }
}