export class Jogo {
    public id: number;
    private titulo: string;
    private desenvolvedora: string;
    private plataforma: string;
    private data_lancamento: string;
    private preco: number;
    private descricao: string;
    private quantidade: number;
    private categoria: string;

    public constructor(id: number, titulo: string, desenvolvedora: string, plataforma: string, data_lancamento: string, preco: number, descricao: string, quantidade: number, categoria: string) {
        this.id = id;
        this.titulo = titulo;
        this.desenvolvedora = desenvolvedora;
        this.plataforma = plataforma;
        this.data_lancamento = data_lancamento;
        this.preco = preco;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.categoria = categoria;
    }

    // Getters
    public getTitulo(): string {
        return this.titulo;
    }

    public getDesenvolvedora(): string {
        return this.desenvolvedora;
    }

    public getPlataforma(): string {
        return this.plataforma;
    }

    public getDataLancamento(): string {
        return this.data_lancamento;
    }

    public getPreco(): number {
        return this.preco;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

    public getCategoria(): string {
        return this.categoria;
    }

    // Setters
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public setDesenvolvedora(desenvolvedora: string): void {
        this.desenvolvedora = desenvolvedora;
    }

    public setPlataforma(plataforma: string): void {
        this.plataforma = plataforma;
    }

    public setDataLancamento(data_lancamento: string): void {
        this.data_lancamento = data_lancamento;
    }

    public setPreco(preco: number): void {
        this.preco = preco;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public setQuantidade(quantidade: number): void {
        this.quantidade = quantidade;
    }

    public setCategoria(categoria: string): void {
        this.categoria = categoria;
    }
}