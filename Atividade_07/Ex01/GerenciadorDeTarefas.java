package Lista7.Ex01;

public class GerenciadorDeTarefas {
    private Tarefa cabeca;

    public GerenciadorDeTarefas() {
        this.cabeca = null;
    }

    public void adicionarTarefa(String descricao) {
        Tarefa nova = new Tarefa(descricao);
        if (cabeca == null) {
            cabeca = nova;
        } else {
            Tarefa atual = cabeca;
            while (atual.obterProxima() != null) {
                atual = atual.obterProxima();
            }
            atual.definirProxima(nova);
        }
        System.out.println("Tarefa adicionada: " + descricao);
    }

    public void removerTarefa(int posicao) {
        if (posicao == 0 && cabeca != null) {
            System.out.println("Tarefa removida: " + cabeca.obterDescricao());
            cabeca = cabeca.obterProxima();
        } else {
            Tarefa atual = cabeca;
            Tarefa anterior = null;
            int contador = 0;
            while (atual != null && contador < posicao) {
                anterior = atual;
                atual = atual.obterProxima();
                contador++;
            }
            if (atual != null) {
                System.out.println("Tarefa removida: " + atual.obterDescricao());
                anterior.definirProxima(atual.obterProxima());
            } else {
                System.out.println("Tarefa não encontrada na posição: " + posicao);
            }
        }
    }

    public void concluirTarefa(int posicao) {
        Tarefa atual = cabeca;
        int contador = 0;
        while (atual != null && contador < posicao) {
            atual = atual.obterProxima();
            contador++;
        }
        if (atual != null) {
            atual.marcarComoConcluida();
            System.out.println("Tarefa marcada como concluída: " + atual.obterDescricao());
        } else {
            System.out.println("Tarefa não encontrada na posição: " + posicao);
        }
    }

    public void mostrarTarefas() {
        Tarefa atual = cabeca;
        int contador = 0;
        while (atual != null) {
            System.out.println(contador + ": " + atual);
            atual = atual.obterProxima();
            contador++;
        }
    }
}
