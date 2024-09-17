package Lista7.Ex04;

public class Principal {
    public static void main(String[] args) {
        GerenciadorTexto editor = new GerenciadorTexto();

        editor.adicionarTexto("Primeiro conteúdo.");
        editor.exibirTextoAtual();

        editor.adicionarTexto("Segundo conteúdo.");
        editor.exibirTextoAtual();

        editor.adicionarTexto("Terceiro conteúdo.");
        editor.exibirTextoAtual();

        editor.desfazerAlteracao();
        editor.exibirTextoAtual();

        editor.desfazerAlteracao();
        editor.exibirTextoAtual();

        editor.refazerAlteracao();
        editor.exibirTextoAtual();

        editor.refazerAlteracao();
        editor.exibirTextoAtual();

        editor.desfazerAlteracao();
        editor.exibirTextoAtual();

        editor.desfazerAlteracao();
        editor.exibirTextoAtual();

        editor.refazerAlteracao();
        editor.exibirTextoAtual();
    }
}
