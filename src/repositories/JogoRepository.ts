import { JogoRepositoryInterface } from "../interfaces/JogoRepositoryIInterface";
import { Jogo } from "../models/Jogo";

export class JogoRepository implements JogoRepositoryInterface {
    private static instance: JogoRepository;
    private jogos: Jogo[] = [
        new Jogo(1, "Red Dead Redemption 2", "Rockstar Games", "PC", "2018-10-26", 300, "Jogo de velho oeste.", 10, 'Ação e aventura'),
        new Jogo(2, "Grand Theft Auto V", "Rockstar Games", "PC", "2013-09-17", 200, "Jogo de mundo aberto.", 15, 'Ação')
    ];

    private constructor() {}

    public static getInstance(): JogoRepository {
        if (!JogoRepository.instance) {
            JogoRepository.instance = new JogoRepository();
        }
        return JogoRepository.instance;
    }

    public cadastrar(jogo: Jogo): void {
        this.jogos.push(jogo);
    }

    public deletar_jogo(id: number): void {
        const jogoIndex = this.jogos.findIndex(jogo => jogo.id === id);
        if (jogoIndex !== -1) {
            this.jogos.splice(jogoIndex, 1);
        }
    }

    public list_jogos(): Jogo[] {
        return this.jogos;
    }

    public list_jogo(id: number): Jogo | undefined {
        return this.jogos.find(jogo => jogo.id === id);
    }

    public editar_jogo(jogoAtualizado: Jogo): void {
        const jogoExiste = this.jogos.find(j => j.id === jogoAtualizado.id);
        if (jogoExiste) {
            jogoExiste.setTitulo(jogoAtualizado.getTitulo());
            jogoExiste.setDesenvolvedora(jogoAtualizado.getDesenvolvedora());
            jogoExiste.setPlataforma(jogoAtualizado.getPlataforma());
            jogoExiste.setDataLancamento(jogoAtualizado.getDataLancamento());
            jogoExiste.setPreco(jogoAtualizado.getPreco());
            jogoExiste.setDescricao(jogoAtualizado.getDescricao());
            jogoExiste.setQuantidade(jogoAtualizado.getQuantidade());
        }
    }
}