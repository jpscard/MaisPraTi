public class CartaoCredito extends FormaPagamento {
    private String numeroCartao;

    public CartaoCredito(String numeroCartao) {
        this.numeroCartao = numeroCartao;
    }

    @Override
    void processarPagamento(double valor) {
        if (validarPagamento() == true) {
            System.out.println("Processando pagamento de R$" + valor + " com Cartão.");

        } else {
            System.out.println("Falha na validação");

        }

    }

    @Override
    boolean validarPagamento() {
        if (numeroCartao == null) {
            return false;
        } else {
            return true;
        }
    }
}
