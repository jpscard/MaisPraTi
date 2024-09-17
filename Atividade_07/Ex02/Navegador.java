package Lista7.Ex02;

public class Navegador {
    private RegistroHistorico inicio;

    public Navegador() {
        this.inicio = null;
    }

    public void adicionarEndereco(String endereco) {
        RegistroHistorico novoRegistro = new RegistroHistorico(endereco);
        if (inicio == null) {
            inicio = novoRegistro;
        } else {
            RegistroHistorico atual = inicio;
            while (atual.obterProximoRegistro() != null) {
                atual = atual.obterProximoRegistro();
            }
            atual.definirProximoRegistro(novoRegistro);
        }
        System.out.println("Endereço adicionado ao histórico: " + endereco);
    }

    public void removerEndereco(int posicao) {
        if (inicio == null) {
            System.out.println("Nenhum histórico disponível para remoção.");
            return;
        }

        if (posicao == 0) {
            System.out.println("Endereço removido do histórico: " + inicio.obterEndereco());
            inicio = inicio.obterProximoRegistro();
            return;
        }

        RegistroHistorico atual = inicio;
        RegistroHistorico anterior = null;
        int contador = 0;

        while (atual != null && contador < posicao) {
            anterior = atual;
            atual = atual.obterProximoRegistro();
            contador++;
        }

        if (atual != null) {
            anterior.definirProximoRegistro(atual.obterProximoRegistro());
            System.out.println("Endereço removido do histórico: " + atual.obterEndereco());
        } else {
            System.out.println("Endereço não encontrado na posição: " + posicao);
        }
    }

    public void exibirHistorico() {
        RegistroHistorico atual = inicio;
        int contador = 0;
        while (atual != null) {
            System.out.println(contador + ": " + atual);
            atual = atual.obterProximoRegistro();
            contador++;
        }
    }
}
