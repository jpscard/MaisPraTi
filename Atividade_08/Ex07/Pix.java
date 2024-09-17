public class Pix extends FormaPagamento{
    private String chave;

    public Pix(String chave) {
        this.chave = chave;
    }

    @Override
    void processarPagamento(double valor) {
        if(validarPagamento() == true) {
        System.out.println("Processando pagamento de R$" + valor + " com Pix.");

        } else {
            System.out.println("Falha na validação");
        }
    }

    @Override
    boolean validarPagamento() {
        if (chave == null) {
            return false;
        } else {
            return true;

        }
    }
    


    
}
