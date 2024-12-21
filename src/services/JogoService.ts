import { JogoRepositoryInterface } from "../interfaces/JogoRepositoryIInterface";
import { Jogo } from "../models/Jogo";

export class JogoService {
    private repository: JogoRepositoryInterface;

    constructor(repository: JogoRepositoryInterface) {
        this.repository = repository;
    }

    public cadastrarJogo(jogo: Jogo): void {
        if (!jogo.getTitulo() || !jogo.getDesenvolvedora()) {
            throw new Error('Dados inválidos para o jogo');
        }
        this.repository.cadastrar(jogo);
    }

    public editarJogo(jogoAtualizado: Jogo): void {
        const jogo = this.repository.list_jogo(jogoAtualizado.id);
        if (!jogo) {
            throw new Error('Jogo não encontrado');
        }
        this.repository.editar_jogo(jogoAtualizado);
    }

    public deletarJogo(id: number): void {
        this.repository.deletar_jogo(id);
    }

    public listarJogos(): Jogo[] {
        return this.repository.list_jogos();
    }

    public buscarJogo(id: number): Jogo | undefined {
        return this.repository.list_jogo(id);
    }
}