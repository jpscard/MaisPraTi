package Lista7.Ex03;

public class VersaoTexto {
    private String conteudo;
    private VersaoTexto versaoAnterior;

    public VersaoTexto(String conteudo) {
        this.conteudo = conteudo;
        this.versaoAnterior = null;
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
}
