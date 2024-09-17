package Lista7.Ex04;

public class GerenciadorTexto {
    private VersaoTexto versaoAtual;

    public GerenciadorTexto() {
        this.versaoAtual = null;
    }

    public void adicionarTexto(String conteudo) {
        VersaoTexto novaVersao = new VersaoTexto(conteudo);
        if (versaoAtual != null) {
            versaoAtual.definirProximaVersao(novaVersao);
            novaVersao.definirVersaoAnterior(versaoAtual);
        }
        versaoAtual = novaVersao;
        System.out.println("Texto adicionado: " + conteudo);
    }

    public void desfazerAlteracao() {
        if (versaoAtual != null && versaoAtual.obterVersaoAnterior() != null) {
            System.out.println("Desfazendo alteração. Texto removido: " + versaoAtual.obterConteudo());
            versaoAtual = versaoAtual.obterVersaoAnterior();
        } else {
            System.out.println("Não há alterações para desfazer.");
        }
    }

    public void refazerAlteracao() {
        if (versaoAtual != null && versaoAtual.obterProximaVersao() != null) {
            versaoAtual = versaoAtual.obterProximaVersao();
            System.out.println("Refazendo alteração. Texto atual: " + versaoAtual.obterConteudo());
        } else {
            System.out.println("Não há alterações para refazer.");
        }
    }

    public void exibirTextoAtual() {
        if (versaoAtual != null) {
            System.out.println("Texto atual: " + versaoAtual.obterConteudo());
        } else {
            System.out.println("Nenhum texto disponível para exibir.");
        }
    }
}
