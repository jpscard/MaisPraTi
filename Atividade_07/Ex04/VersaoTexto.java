package Lista7.Ex04;

public class VersaoTexto {
    private String conteudo;
    private VersaoTexto versaoAnterior;
    private VersaoTexto proximaVersao;

    public VersaoTexto(String conteudo) {
        this.conteudo = conteudo;
        this.versaoAnterior = null;
        this.proximaVersao = null;
    }

    public String obterConteudo() {
        return conteudo;
    }

    public VersaoTexto obterVersaoAnterior() {
        return versaoAnterior;
    }

    public void definirVersaoAnterior(VersaoTexto versaoAnterior) {
        this.versaoAnterior = versaoAnterior;
    }

    public VersaoTexto obterProximaVersao() {
        return proximaVersao;
    }

    public void definirProximaVersao(VersaoTexto proximaVersao) {
        this.proximaVersao = proximaVersao;
    }
}
