package Lista7.Ex03;

public class EditorDeTexto {
    private VersaoTexto versaoAtual;

    public EditorDeTexto() {
        this.versaoAtual = null;
    }

    public void adicionarTexto(String conteudo) {
        VersaoTexto novaVersao = new VersaoTexto(conteudo);
        novaVersao.definirVersaoAnterior(versaoAtual);
        versaoAtual = novaVersao;
        System.out.println("Texto adicionado: " + conteudo);
    }

    public void desfazerAlteracao() {
        if (versaoAtual != null) {
            System.out.println("Desfazendo alteração. Texto removido: " + versaoAtual.obterConteudo());
            versaoAtual = versaoAtual.obterVersaoAnterior();
        } else {
            System.out.println("Não há alterações para desfazer.");
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
