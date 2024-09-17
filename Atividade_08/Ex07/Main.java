public class Main {
    public static void main(String[] args) {
        Pix novoPix = new Pix("chaveTeste");
        Boleto novBoleto = new Boleto("codigoTeste");
        CartaoCredito novCartaoCredito = new CartaoCredito("55");

        novoPix.processarPagamento(10);
        novBoleto.processarPagamento(50);
        novCartaoCredito.processarPagamento(500);
    }
}
