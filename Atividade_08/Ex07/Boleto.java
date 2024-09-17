public class Boleto extends FormaPagamento {
    private String codigo;

    public Boleto(String codigo) {
        this.codigo = codigo;
    }

    @Override
    void processarPagamento(double valor) {
        if (validarPagamento() == true) {
            System.out.println("Processando pagamento de R$" + valor + " com Boleto.");
        } else {
            System.out.println("Falha na validação");
        }
    }

    @Override
    boolean validarPagamento() {
        if (codigo == null) {
            return false;
            
        } else {
            return true;
        }
    }
    

    
}
