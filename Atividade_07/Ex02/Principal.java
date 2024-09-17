package Lista7.Ex02;

public class Principal {
    public static void main(String[] args) {
        Navegador navegador = new Navegador();

        navegador.adicionarEndereco("www.google.com");
        navegador.adicionarEndereco("www.maisPraTI.com");
        navegador.adicionarEndereco("www.linkedin.com");

        navegador.exibirHistorico();

        navegador.removerEndereco(2);
    }
}
