export class JogoPedido {
    public id: number;
    public id_jogo: number;
    public preco_jogo: number;
    private quantidade: number;

    public constructor(id: number, id_jogo: number, preco_jogo: number, quantidade: number) {
        this.id = id;
        this.id_jogo = id_jogo;
        this.preco_jogo = preco_jogo;
        this.quantidade = quantidade;
    }

    // Getters
    public getId(): number {
        return this.id;
    }
   
    public getIdJogo(): number {
        return this.id_jogo;
    }

    public getPrecoJogo(): number {
        return this.preco_jogo;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

    public getSubtotal(): number {
        return this.quantidade * this.preco_jogo;
    }
    
    // Setters
    public setQuantidade(quantidade: number): void {
        this.quantidade = quantidade;
    }

}