import { AdminController } from "./controller/AdminController";
import { ClienteController } from "./controller/ClienteController";
import { JogoController } from "./controller/JogoController";
import { PedidoController } from "./controller/PedidoController";
import { Mediator } from "./interfaces/Mediator";
import { AdminRepository } from "./repositories/AdminRepository";
import { ClienteRepository } from "./repositories/ClienteRepository";
import { JogoRepository } from "./repositories/JogoRepository";
import { PedidoRepository } from "./repositories/PedidoRepository";
import { AdminService } from "./services/AdminService";
import { ClienteService } from "./services/ClienteService";
import { JogoService } from "./services/JogoService";
import { PedidoService } from "./services/PedidoService";
import { AdminView } from "./views/AdminView";
import { ClienteView } from "./views/ClienteView";
import { JogoView } from "./views/JogoView";
import { PedidoView } from "./views/PedidoView";

export class SistemaMediator implements Mediator {
    executarComando(comando: string): void {
        switch (comando) {
            case '1':
                const clienteView = new ClienteView();
                const clienteRepository = ClienteRepository.getInstance();
                const clienteService = new ClienteService(clienteRepository);
                const clienteController = new ClienteController(clienteService, clienteView);
                clienteController.iniciar();
                break;
            case '2':
                const adminView = new AdminView();
                const adminRepository =AdminRepository.getInstance();
                const adminService = new AdminService(adminRepository);
                const adminController = new AdminController(adminService, adminView);
                adminController.iniciar();
                break;
            case '3': {
                const jogoView = new JogoView();
                const jogoRepository = JogoRepository.getInstance();
                const jogoService = new JogoService(jogoRepository);
                const jogoController = new JogoController(jogoService, jogoView);
                jogoController.iniciar();
                break;
            }
            case '4': {
                const pedidoRepository = PedidoRepository.getInstance();
                const pedidoView = new PedidoView();
                const pedidoService = new PedidoService(pedidoRepository);
                const jogoRepository = JogoRepository.getInstance();
                const pedidoController = new PedidoController(pedidoService, pedidoView, jogoRepository);
                pedidoController.iniciar();
                break;
            }
            case '10':
                console.log("Saindo...");
                break;
            default:
                console.log("Opcao invalida. Tente novamente.");
        }
    }
}