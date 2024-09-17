package Lista7.Ex01;

import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        GerenciadorDeTarefas gerenciador = new GerenciadorDeTarefas();
        Scanner entrada = new Scanner(System.in);
        int opcao = -1;

        System.out.println("Bem-vindo ao Gerenciador de Tarefas!");

        while (opcao != 0) {
            exibirMenu();
            System.out.print("Escolha uma opção: ");
            opcao = entrada.nextInt();
            entrada.nextLine(); 

            switch (opcao) {
                case 1:
                    System.out.print("Digite a descrição da tarefa: ");
                    String descricao = entrada.nextLine();
                    gerenciador.adicionarTarefa(descricao);
                    break;
                case 2:
                    System.out.print("Digite o índice da tarefa para remover: ");
                    int indiceRemover = entrada.nextInt();
                    entrada.nextLine();
                    gerenciador.removerTarefa(indiceRemover);
                    break;
                case 3:
                    System.out.print("Digite o índice da tarefa para marcar como concluída: ");
                    int indiceCompletar = entrada.nextInt();
                    entrada.nextLine(); 
                    gerenciador.concluirTarefa(indiceCompletar);
                    break;
                case 4:
                    gerenciador.mostrarTarefas();
                    break;
                case 0:
                    System.out.println("Saindo do Gerenciador de Tarefas...");
                    break;
                default:
                    System.out.println("Opção inválida. Tente novamente.");
            }
        }

        entrada.close();
    }

    private static void exibirMenu() {
        System.out.println("\nMenu:");
        System.out.println("1 - Adicionar tarefa");
        System.out.println("2 - Remover tarefa");
        System.out.println("3 - Marcar tarefa como concluída");
        System.out.println("4 - Listar todas as tarefas");
        System.out.println("0 - Sair");
    }
}
