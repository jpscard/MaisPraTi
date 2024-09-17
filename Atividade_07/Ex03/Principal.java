package Lista7.Ex03;

public class Principal {
    public static void main(String[] args) {
        EditorDeTexto editor = new EditorDeTexto();

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

        editor.desfazerAlteracao();
        editor.exibirTextoAtual();

        editor.desfazerAlteracao();
    }
}
