package Lista7.Ex01;

public class Tarefa {
    private String descricao;
    private boolean concluida;
    private Tarefa proxima;

    public Tarefa(String descricao) {
        this.descricao = descricao;
        this.concluida = false;
        this.proxima = null;
    }

    public String obterDescricao() {
        return descricao;
    }

    public boolean estaConcluida() {
        return concluida;
    }

    public void marcarComoConcluida() {
        this.concluida = true;
    }

    public Tarefa obterProxima() {
        return proxima;
    }

    public void definirProxima(Tarefa proxima) {
        this.proxima = proxima;
    }

    @Override
    public String toString() {
        return descricao + (concluida ? " (Concluída)" : " (Pendente)");
    }
}
