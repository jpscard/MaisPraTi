package Lista7.Ex01;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        GerenciadorTarefas gerenciador = new GerenciadorTarefas();
        Scanner scanner = new Scanner(System.in);
        int escolha = -1;

        System.out.println("Bem-vindo ao Gerenciador de Tarefas!");

        while (escolha != 0) {
            exibirMenu();
            System.out.print("Digite o número da opção desejada: ");
            escolha = scanner.nextInt();
            scanner.nextLine(); 

            switch (escolha) {
                case 1:
                    System.out.print("Digite a descrição da tarefa: ");
                    String descricao = scanner.nextLine();
                    gerenciador.adicionarTarefa(descricao);
                    break;
                case 2:
                    System.out.print("Digite o índice da tarefa a ser removida: ");
                    int indiceRemover = scanner.nextInt();
                    scanner.nextLine();
                    gerenciador.removerTarefa(indiceRemover);
                    break;
                case 3:
                    System.out.print("Digite o índice da tarefa a ser marcada como completa: ");
                    int indiceCompletar = scanner.nextInt();
                    scanner.nextLine(); 
                    gerenciador.completarTarefa(indiceCompletar);
                    break;
                case 4:
                    gerenciador.listarTarefas();
                    break;
                case 0:
                    System.out.println("Saindo do Gerenciador de Tarefas...");
                    break;
                default:
                    System.out.println("Opção não reconhecida. Por favor, escolha uma opção válida.");
            }
        }

        scanner.close();
    }

    private static void exibirMenu() {
        System.out.println("\nMenu:");
        System.out.println("1 - Adicionar tarefa");
        System.out.println("2 - Remover tarefa");
        System.out.println("3 - Completar tarefa");
        System.out.println("4 - Listar tarefas");
        System.out.println("0 - Sair");
    }
}
